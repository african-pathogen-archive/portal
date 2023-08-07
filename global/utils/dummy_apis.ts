import { HttpMethods } from './constants';

export async function dummyApiRequest(method: HttpMethods, url = '', data = []) {
	const BASE_URL = 'https://us-central1-apa-beta-e5aa0.cloudfunctions.net/app/api/';

    if (url == 'read') {
        return GetPathogenData();
    }

    if (url == 'teamdata'){
        return GetTeamData();
    }

}

const GetPathogenData = () => {
    const data = [{"id":"amr","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"Camomile","projectId":"amr-1"}},{"id":"cholera","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"Rooibos","projectId":"cholera-1"}},{"id":"hiv","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"HIV","projectId":"hiv-1"}},{"id":"m-tuberculosis","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"M.tuberculosis","projectId":"m-tuberculosis-1"}},{"id":"malaria","item":{"noOfSamples":"20","dateCreated":"2023-07-25","pathogen":"Malaria","projectId":"malaria-1"}},{"id":"mpox","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"Mpox","projectId":"mpox-1"}},{"id":"sars-cov-2","item":{"noOfSamples":"38","dateCreated":"2023-07-01","pathogen":"SARS-CoV-2","projectId":"SARS-CoV-2 Study"}},{"id":"viral-hemorrhagic-fever","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"Viral hemorrhagic Fever","projectId":"viral-hemorrhagic-fever"}},{"id":"waste-water-surveillance","item":{"noOfSamples":"25","dateCreated":"2023-07-25","pathogen":"Waste water surveillance","projectId":"waste-water-surveillance-1"}}]
    return data
}

const GetTeamData = () => {
    const data = [{"id":"jameswatt","item":{"name":"James Watt","email":"jameswatt@gmail.com","institute":"UWC","role":"uploader"}}]
    return data 
}

// const GetTeamData = () => {
//     const data = [
//         {"id":"jameswatt","item":{"name":"James Watt","email":"jameswatt@gmail.com","institute":"UWC","role":"uploader"}},
//         {"id":"albertcole","item":{"name":"Albert Cole","email":"albertcole@gmail.com","institute":"UWC","role":"downloader"}},
//         {"id":"alanwhite","item":{"name":"Alan White","email":"alanwhite@gmail.com","institute":"UWC","role":"downloader"}},
//         {"id":"karynwhite","item":{"name":"Karyn White","email":"karynwhite@gmail.com","institute":"UCT","role":"collaborator"}},
//         {"id":"tinacousins","item":{"name":"Tina Cousins","email":"tinacousins@gmail.com","institute":"UP","role":"administrator"}},
//         {"id":"aerinstone","item":{"name":"Aerin Stone","email":"aerinstone@gmail.com","institute":"CTIV","role":"uploader"}},
//         {"id":"hestermeek","item":{"name":"Hester Meek","email":"hestermeek@gmail.com","institute":"CTIV","role":"collaborator"}},        
//     ]
//     return data
// }