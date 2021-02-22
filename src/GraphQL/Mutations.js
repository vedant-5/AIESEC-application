import {useMutation,gql} from "@apollo/client";

const UPDATE_OPPORTUNITY = gql`
    mutation PostMutation(
        $title: String!
        $description: String!
    ){
        post(title: $title , description: $description ) {
            id
            title
            description
        }
    }
`

export default UPDATE_OPPORTUNITY;