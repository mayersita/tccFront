import React, { useState, useEffect } from 'react';

import {
  View,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
  Text,
  Modal,
} from 'react-native';
import { getScreenSize, getKeyboardDimensions } from '../../utils/uiUtils';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/Header';
import { Creators as CommentsActions } from '../../store/ducks/comments';
import { FontAwesome } from '@expo/vector-icons';
import { Snackbar, RadioButton } from 'react-native-paper';
import { INVEST_TYPE } from '../../pages/constants/investContants';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  List,
  Scrollable,
  StoryText,
  CommentTitleView,
  TextComments,
  CommentView,
  UserProfile,
  UserInfo,
  CommentText,
  SubText,
  Inputcontainer,
  InputComment,
  ListContainer,
  LinkTo,
  TextLink,
  ModalContainer,
  TitleModal,
  Line,
  RadioDescription,
  Criteria,
  CriteriaWrap,
} from './styles';

const StoryDetails = ({ navigation }) => {
  const [comment, setComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('i');
  const story = navigation.getParam('story');
  const fromTeam = navigation.getParam('fromTeam');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.comments.loading);
  const success = useSelector((store) => store.comments.success);
  const error = useSelector((store) => store.comments.error);
  let page = useSelector((store) => store.comments.page);
  const size = getScreenSize();
  const keyboardDimensions = getKeyboardDimensions();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(CommentsActions.clearComment());
  }, []);

  useEffect(() => {
    if (error) setVisible(true);
  }, [error]);

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const onRefresh = () => {
    dispatch(CommentsActions.getComments(story._id, 1));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('willFocus', () => {
      dispatch(CommentsActions.getComments(story._id, 1));
    });
    return () => {
      unsubscribe.remove();
    };
  }, [navigation]);

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(CommentsActions.getComments(story._id, 1));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const commentsfromStory = useSelector((store) => store.comments.dataComments);

  function writeComment() {
    dispatch(CommentsActions.createComment(story._id, comment, checked));
    setComment('');
    onRefresh();
  }

  const handleLoadMore = () => {
    let nextPage = page + 1;
    dispatch(CommentsActions.getComments(story._id, nextPage));
  };

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <HeaderComponent />
        <SubContainer>
          <TitleView>
            <TitleText>{story.title}</TitleText>
            <SubText>
              Autor: {fromTeam ? story.author.name : story.author}
            </SubText>
          </TitleView>
        </SubContainer>
        <Scrollable>
          <StoryText>{story.description}</StoryText>
        </Scrollable>
        <CommentTitleView>
          <MaterialIcons name="chat" size={25} color="#2FCC76" />
          <TextComments>Comentários:</TextComments>
        </CommentTitleView>
        <ListContainer>
          {commentsfromStory ? (
            <List
              data={commentsfromStory}
              keyExtractor={(item) => item._id}
              onEndReached={
                commentsfromStory?.length >= 10 ? handleLoadMore : null
              }
              onEndReachedThreshold={0.1}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => (
                <CommentView>
                  <UserProfile>
                    <View style={{ flexDirection: 'row' }}>
                      <FontAwesome
                        name="user-circle"
                        size={25}
                        color="#7D7D7D"
                      />
                      <UserInfo>{item.user.name}:</UserInfo>
                    </View>
                    <CriteriaWrap>
                      <Criteria>
                        {INVEST_TYPE[item.investCriteria].toUpperCase()}
                      </Criteria>
                    </CriteriaWrap>
                  </UserProfile>
                  <CommentText>{item.description}</CommentText>
                </CommentView>
              )}
            />
          ) : (
            <Text>Ninguém comentou nessa história ainda...</Text>
          )}
        </ListContainer>
        <LinkTo onPress={() => setModalVisible(true)}>
          <TextLink>Avaliar</TextLink>
        </LinkTo>
      </Container>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalContainer
          style={{
            marginTop: Math.max(
              size.height - 300 - keyboardDimensions.height,
              0
            ),
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#08ae9e',
            }}
          >
            <TitleModal>
              Selecione um critério para avaliar a história
            </TitleModal>
            <TouchableOpacity
              style={{ width: 20, marginRight: 20 }}
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcons name="close" size={24} color="#434343" />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: 'row', marginTop: 30, marginBottom: 30 }}
          >
            <View style={{ width: '50%' }}>
              <Line>
                <RadioButton
                  value="i"
                  status={checked === 'i' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('i')}
                />
                <RadioDescription>(I)ndependent</RadioDescription>
              </Line>
              <Line>
                <RadioButton
                  value="n"
                  status={checked === 'n' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('n')}
                />
                <RadioDescription>(N)egotiable</RadioDescription>
              </Line>
              <Line>
                <RadioButton
                  value="v"
                  status={checked === 'v' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('v')}
                />
                <RadioDescription>(V)aluable</RadioDescription>
              </Line>
            </View>
            <View style={{ width: '50%' }}>
              <Line>
                <RadioButton
                  value="e"
                  status={checked === 'e' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('e')}
                />
                <RadioDescription>(E)stimable</RadioDescription>
              </Line>
              <Line>
                <RadioButton
                  value="s"
                  status={checked === 's' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('s')}
                />
                <RadioDescription>(S)mall</RadioDescription>
              </Line>
              <Line>
                <RadioButton
                  value="t"
                  status={checked === 't' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('t')}
                />
                <RadioDescription>(T)estable</RadioDescription>
              </Line>
            </View>
          </View>

          <Inputcontainer>
            <InputComment
              placeholder="Escreva um comentário..."
              value={comment}
              autoCorrect={true}
              multiline={true}
              onChangeText={(text) => setComment(text)}
              returnKeyType="send"
            />
            <TouchableOpacity onPress={writeComment}>
              <MaterialIcons name="send" size={24} color="#08ae9e" />
            </TouchableOpacity>
          </Inputcontainer>
        </ModalContainer>
      </Modal>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={{ backgroundColor: '#A30D0B' }}
      >
        Erro ao carregar comentários!
      </Snackbar>
    </>
  );
};

export default StoryDetails;
