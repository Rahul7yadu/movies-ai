const fs = require('fs');


const searchResult = { page: 1,
results: [
  {
    adult: false,
    id: 500,
    name: 'Tom Cruise',
    original_name: 'Tom Cruise',
    media_type: 'person',
    popularity: 38.103,
    gender: 2,
    known_for_department: 'Acting',
    profile_path: '/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg',
    known_for: [Array]
  } ],
  
  total_pages: 1,
  total_results: 19
}
   const testData = {
    page: 1,
    results: [
      {
        adult: false,
        gender: 2,
        id: 1951129,
        known_for_department: 'Acting',
        name: 'Justin Chien',
        original_name: 'Justin Chien',
        popularity: 253.875,
        profile_path: '/2Hwf697i22eBUUDKJPiaGfkJXM.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 64295,
        known_for_department: 'Acting',
        name: 'Alan Ritchson',
        original_name: 'Alan Ritchson',
        popularity: 225.361,
        profile_path: '/wdmLUSPEC7dXuqnjTM4NgbjvTKk.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 12799,
        known_for_department: 'Acting',
        name: 'Jeremy Piven',
        original_name: 'Jeremy Piven',
        popularity: 223.774,
        profile_path: '/dHBHZRHEVBAdozGC4SWyIIP5NLh.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 115440,
        known_for_department: 'Acting',
        name: 'Sydney Sweeney',
        original_name: 'Sydney Sweeney',
        popularity: 205.597,
        profile_path: '/i1L5BVg7eBYHh2JnAN7fVnFmDQ2.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 73968,
        known_for_department: 'Acting',
        name: 'Henry Cavill',
        original_name: 'Henry Cavill',
        popularity: 185.382,
        profile_path: '/iWdKjMry5Pt7vmxU7bmOQsIUyHa.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 17521,
        known_for_department: 'Acting',
        name: 'Kelly Reilly',
        original_name: 'Kelly Reilly',
        popularity: 166.7,
        profile_path: '/gof8bWW9E7MH30GpvA97PwGiIuu.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 2034418,
        known_for_department: 'Acting',
        name: 'Jacob Elordi',
        original_name: 'Jacob Elordi',
        popularity: 155.413,
        profile_path: '/khfLyxY9gsKiLFoz2zj0h3uhDFJ.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 976,
        known_for_department: 'Acting',
        name: 'Jason Statham',
        original_name: 'Jason Statham',
        popularity: 143.921,
        profile_path: '/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 1290466,
        known_for_department: 'Acting',
        name: 'Barry Keoghan',
        original_name: 'Barry Keoghan',
        popularity: 140.709,
        profile_path: '/ngoitknM6hw8fffLywyvjzy6Iti.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 974169,
        known_for_department: 'Acting',
        name: 'Jenna Ortega',
        original_name: 'Jenna Ortega',
        popularity: 136.872,
        profile_path: '/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 54693,
        known_for_department: 'Acting',
        name: 'Emma Stone',
        original_name: 'Emma Stone',
        popularity: 133.735,
        profile_path: '/3UaYw9KF4fEXRMRWhf25aGJpAW2.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 990393,
        known_for_department: 'Acting',
        name: 'Erin Moriarty',
        original_name: 'Erin Moriarty',
        popularity: 125.554,
        profile_path: '/nA2HsETMzIUAau5XDERIxfSdc5y.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 1245,
        known_for_department: 'Acting',
        name: 'Scarlett Johansson',
        original_name: 'Scarlett Johansson',
        popularity: 124.402,
        profile_path: '/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 18897,
        known_for_department: 'Acting',
        name: 'Jackie Chan',
        original_name: 'Jackie Chan',
        popularity: 123.849,
        profile_path: '/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 10297,
        known_for_department: 'Acting',
        name: 'Matthew McConaughey',
        original_name: 'Matthew McConaughey',
        popularity: 122.932,
        profile_path: '/e9ZHRY5toiBZCIPEEyvOG9A8ers.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 234352,
        known_for_department: 'Acting',
        name: 'Margot Robbie',
        original_name: 'Margot Robbie',
        popularity: 120.791,
        profile_path: '/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 224513,
        known_for_department: 'Acting',
        name: 'Ana de Armas',
        original_name: 'Ana de Armas',
        popularity: 117.551,
        profile_path: '/3vxvsmYLTf4jnr163SUlBIw51ee.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 11705,
        known_for_department: 'Acting',
        name: 'Michelle Monaghan',
        original_name: 'Michelle Monaghan',
        popularity: 114.218,
        profile_path: '/jB47BoGdudHELszn9ZAZqnnUy8N.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 2,
        id: 27972,
        known_for_department: 'Acting',
        name: 'Josh Hutcherson',
        original_name: 'Josh Hutcherson',
        popularity: 113.726,
        profile_path: '/npowygg8rH7uJ4v7rAoDMsHBhNq.jpg',
        known_for: [Array]
      },
      {
        adult: false,
        gender: 1,
        id: 17628,
        known_for_department: 'Acting',
        name: 'Mary Elizabeth Winstead',
        original_name: 'Mary Elizabeth Winstead',
        popularity: 113.651,
        profile_path: '/cBMtncBcUrKMTB8CifDG23THuCE.jpg',
        known_for: [Array]
      }
    ],
    total_pages: 160853,
    total_results: 3217043
  } 

 function jsonToType(jsonData){
    const answer = {};
        for(const key in jsonData){
           
            if(jsonData.hasOwnProperty(key)){
               if(typeof jsonData[key]==='object'){
                if(Array.isArray(jsonData[key])){
                    const firstValue = jsonData[key][0];
                    console.log(firstValue)
                    if(typeof firstValue==='object'){
                        if(typeof jsonData[key]===null){
                            answer[key] = null
                            continue;
                           }
                        jsonData[key][0] = jsonToType(firstValue)
                    }
                   answer[key] =  jsonData[key].slice(0,1)
                   console.log(jsonData[key])
                }else{

               answer[key] =  jsonToType(jsonData[key]);
                }
               }else{
                answer[key] = typeof jsonData[key]
               }
            }
        }
       const output = JSON.stringify(answer)
        fs.writeFile('output.ts',output,(err)=>err&&console.log(err))
        console.log(answer)
            return answer;
}


jsonToType(testData)

module.exports = {jsonToType}