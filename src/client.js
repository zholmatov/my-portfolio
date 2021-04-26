import sanityClient from '@sanity/client';
//to connect react with sanity
// thus we need project id for this

export default sanityClient({
    projectId: "yorh10fv",
    // you can find this project ID in two places, 1: sanityClient.json -> api -> projectID
    // 2: go to manage.sanity.io -> to your project -> PROJECT ID is there
    dataset: "production"
})