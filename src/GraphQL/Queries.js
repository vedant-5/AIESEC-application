import {gql} from "@apollo/client";

export const LOAD_OPPS = gql`
    query{
        allOpportunity(page:1, per_page:50){
                data{
                    id
                    title
                    description
                    cover_photo
                    location
                    duration
                    description
                    organisation{
                        open_positions
                        name
                    }
                    available_openings
              }
              paging{
                current_page
                total_pages  
                total_items
              }
            }
        }
`