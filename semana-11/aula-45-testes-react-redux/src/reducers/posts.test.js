import posts from './posts'

describe("Posts reducer", () => {
    test("Set Post", () => {
        const testAction = {
            type: "SET_POSTS",
		    payload: {
			    posts:"1"
		}
        }
        const newState = posts(undefined, testAction);
        expect(newState.posts).toHaveLength(1);
        expect(newState.posts).toEqual("1");
    })

    test("SnackBar open", () => {
        const testAction = {
            type: "SET_SNACKBAR_OPEN",
		    payload: {
                open: true,
                msg:"abriu",
                variant:"deu certo"
		}
        }
        const newState = posts(undefined, testAction);
        expect(newState.open).toBe(true);
        expect(newState.msg).toBe("abriu");
        expect(newState.variant).toBe("deu certo");
    })

    test("SnackBar close", () => {
        const testAction = {
            type: "SET_SNACKBAR_CLOSE",
		    payload: {
                open: false,
		}
        }
        const newState = posts(undefined, testAction);
        expect(newState.open).toBe(false);
    })

})