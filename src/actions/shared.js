import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { getInitialData } from "../utils/api";

import Cat from '../images/cat.png';

const user = {
    sarahedo: {
        id: 'sarahedo',
        password:'password123',
        name: 'Sarah Edo',
        avatarURL: Cat,
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
