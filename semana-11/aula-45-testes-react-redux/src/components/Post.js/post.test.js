import React from "react";
import { shallow } from "enzyme";
import Post, { CardStyled, PostCommentWrapper, StyledTextField, StyledBtn, IconWrapper} from "./post";
import { Card, CardHeader, IconButton, Collapse } from "@material-ui/core"; 


describe("Post component", () => {
  test("cardStyled", () => {
    const component = shallow(
      <Post  />
    );
    const cardStyled = component.find(CardStyled);
    expect(cardStyled).toHaveLength(1);
  });

  test("PostCommentWrapper", () => {
    const component = shallow(
      <Post  />
    );
    const postCommentWrapper = component.find(PostCommentWrapper);
    expect(postCommentWrapper).toHaveLength(1);
  });

  test("StyledTextField", () => {
    const component = shallow(
      <Post  />
    );
    const styledTextField = component.find(StyledTextField);
    expect(styledTextField).toHaveLength(1);
  });

  test("StyledBtn", () => {
    const component = shallow(
      <Post  />
    );
    const styledBtn = component.find(StyledBtn);
    expect(styledBtn).toHaveLength(1);
  });

  test("IconWrapper", () => {
    const component = shallow(
      <Post  />
    );
    const iconWrapper = component.find(IconWrapper);
    expect(iconWrapper).toHaveLength(1);
  });

  test("IconButton", () => {
    const component = shallow(
      <Post  />
    );

    const iconButton = component.find(IconButton);
    expect(iconButton).toHaveLength(2);
  });


});
