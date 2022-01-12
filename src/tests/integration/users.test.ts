const request =require ('supertest');

const {usersData} = require('../../schema/schema');

describe('Customer', () => {
  
    let userData = 
         [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Shawn",
                    "last": "King"
                },
                "location": {
                    "street": {
                        "number": 1999,
                        "name": "Jones Road"
                    },
                    "city": "Newbridge",
                    "state": "Kerry",
                    "country": "Ireland",
                    "postcode": 32373,
                    "coordinates": {
                        "latitude": "23.4299",
                        "longitude": "-30.8592"
                    },
                    "timezone": {
                        "offset": "+4:30",
                        "description": "Kabul"
                    }
                },
                "email": "shawn.king@example.com",
                "login": {
                    "uuid": "e8a35b63-b205-431c-92cb-41ee22d7955d",
                    "username": "smallpeacock365",
                    "password": "bell",
                    "salt": "UkdwleXd",
                    "md5": "e904598385cd98831cf45752b6e0e4a4",
                    "sha1": "c2c4ff8d073148a9ff68d92bb9aa0f2928ac5647",
                    "sha256": "a39c128d67cd67c52a4c7989c27f5ce7f96efecb5cdae2f75d22d1ae32749656"
                },
                "dob": {
                    "date": "1948-10-07T07:56:22.423Z",
                    "age": 74
                },
                "registered": {
                    "date": "2017-10-01T19:35:16.297Z",
                    "age": 5
                },
                "phone": "021-184-5338",
                "cell": "081-590-1327",
                "id": {
                    "name": "PPS",
                    "value": "5537507T"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/91.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
                },
                "nat": "IE"
            }
        ];

    describe('GET/user', () => {
        it('should return status 200 when get user list successfully', async () => {
            const res = await usersData();
    expect(res.status).toBe(200);
        })
    })

    // describe('GET/user', () => {
    //     it('should return user list successfully', async () => {
    //     await getUsers().then(
    //             response=>{
    //                 console.log(response.results);
    //                 expect(response.results).toEqual(userData);
    //             })
    //     })
    // })

})

