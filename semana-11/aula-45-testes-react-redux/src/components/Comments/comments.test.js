import React from "react";
import { shallow } from "enzyme";
import Comments, { handleExpandClick, BoldTxt, TxtComentario, CommentsWrapper, CommentsArea, IconButton } from "./comments";
import renderer from "react-test-renderer";


describe("Comments component", () => {
  const mockComment = {
    UserName:"Leo",
    onClickUpVoteComment :'',
    onClickDownVoteComment:'',
    upVote :'',
    DownVote :'',
    commentsNumberCard :'' ,
    textComments :'',
    votesCountCard :'',
  }
  test("Bold Text", () => {
    const component = shallow(
      <Comments  />
    );
    const boldTxt = component.find(BoldTxt);
    expect(boldTxt).toHaveLength(1);
  });

  test("TxtComentario", () => {
    const component = shallow(
      <Comments />
    );
    const txtComentario = component.find(TxtComentario);
    expect(txtComentario).toHaveLength(1);
  });

  test("CommentsWrapper", () => {
    const component = shallow(
      <Comments />
    );
    const commentsWrapper = component.find(CommentsWrapper);
    expect(commentsWrapper).toHaveLength(1);
  });

  test("CommentsArea", () => {
    const component = shallow(
      <Comments />
    );
    const commentsArea = component.find(CommentsArea);
    expect(commentsArea).toHaveLength(1);
  });

});
