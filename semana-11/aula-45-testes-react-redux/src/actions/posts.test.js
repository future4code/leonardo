import { posts, snackBarOpen, onCloseSnackBar, dispatch } from './posts'

describe("Posts Action-Creators", () => {
    test("Posts", () => {
      const expectedResult = {
        type: "SET_POSTS",
        payload: {
          posts: "post"
        }
      };
      const result = posts("post");
      expect(expectedResult).toMatchObject(result);
    });

    test("Open SnackBar", () => {
        const expectedResult = {
          type: "SET_SNACKBAR_OPEN",
          payload: {
            msg: "Abriu",
            variant: "Foi"
          }
        };
        const result = snackBarOpen("Abriu", "Foi");
        expect(expectedResult).toMatchObject(result);
      });

      test("Open SnackClose", () => {
        const expectedResult = {
          type: "SET_SNACKBAR_CLOSE",
          payload: {
            open:false
          }
        };
        const result = onCloseSnackBar(false);
        expect(expectedResult).toMatchObject(result);
        
      });
})