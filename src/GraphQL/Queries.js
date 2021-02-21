import {gql} from "@apollo/client";

export const LOAD_OPPS = gql`
    query{
        allOpportunity{
                data{
                    title
                    description
                    cover_photo
                    location
                    duration
                    description
                    applicants_count
                    organisation{
                        open_positions
                        name
                    }
                    available_openings
              }
            }
        }
`