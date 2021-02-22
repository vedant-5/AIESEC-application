import {useMutation,gql} from "@apollo/client";

const UPDATE_MUTATION = gql`
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

export default UPDATE_MUTATION;