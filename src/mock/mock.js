//模拟用户登录
import Mock from 'mockjs'
const Random = Mock.Random
//home页面的表格数据
// Mock.mock('/getUser',{
//     'data|3': [{
//         'name': Random.cname(),
//         'age': Random.natural(22, 40),
//         'date': Random.date('yyyy-MM-dd'),
//         'address': Random.county(true)
//       }]
// })
//登录数据
Mock.mock('/getLogin',
  {
    "error_code": 0,
    "data": [{
      "id": '1',
      "usertitle": "管理员",
      "username": "admin",
      "password": "123456",
      "token": "123133123",
     },
     {
      "id": '2',
      "usertitle": "用户",
      "username": "root",
      "password": "123456",
      "token": "65454634",
     },
     {
      "id": '3',
      "usertitle": "林先生",
      "username": "林root",
      "password": "123456",
      "token": "65454634",
     },
     {
      "id": '4',
      "usertitle": "吴先生",
      "username": "吴root",
      "password": "123456",
      "token": "65454634",
     },
     {
      "id": '5',
      "usertitle": "张先生",
      "username": "张root",
      "password": "123456",
      "token": "65454634",
     },
     {
      "id": '6',
      "usertitle": "李先生",
      "username": "李root",
      "password": "123456",
      "token": "65454634",
     },
     {
      "id": '7',
      "usertitle": "钟先生",
      "username": "钟root",
      "password": "123456",
      "token": "65454634",
     }
    ]
  }
)
