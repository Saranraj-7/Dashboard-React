import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import card_1 from "../Asset/flow1.png";
import card_2 from "../Asset/flow2.png";

const userData = [
  {
    "_id": "65ba4eb2933cc03db7b0fcf7",
    "isActive": false,
    "age": 26,
    "name": "Wooten Rosales",
    "gender": "male",
    "company": "NEWCUBE",
    "email": "wootenrosales@newcube.com",
    "phone": "+1 (956) 408-2969",
    "address": "977 Richardson Street, Zortman, Marshall Islands, 3898",
    "about": "Culpa voluptate sunt incididunt ullamco duis eiusmod commodo. Incididunt ea irure consectetur commodo nulla aliquip est dolor consequat laborum dolore ad exercitation duis. Do irure duis qui id pariatur ut dolore ea sunt ullamco deserunt aute sunt. Amet ex duis excepteur laborum laboris ad deserunt ut sunt.\r\n",
    "date_of_birth": "2018-12-19T03:29:22 -06:-30",
    "latitude": -8.593971,
    "longitude": 83.779795
  },
  {
    "_id": "65ba4eb2de7e8e9a4af7f9b1",
    "isActive": true,
    "age": 22,
    "name": "Ashley Huffman",
    "gender": "female",
    "company": "QUALITERN",
    "email": "ashleyhuffman@qualitern.com",
    "phone": "+1 (891) 401-2442",
    "address": "835 Tompkins Place, Glenbrook, Illinois, 2006",
    "about": "Sunt aliquip ipsum aliquip proident. Aliquip voluptate mollit exercitation sint velit tempor laboris pariatur reprehenderit culpa. Amet nisi irure qui et. Id minim eiusmod tempor nostrud irure pariatur.\r\n",
    "date_of_birth": "2022-11-03T01:56:26 -06:-30",
    "latitude": -57.300654,
    "longitude": -156.047408
  },
  {
    "_id": "65ba4eb23fdbc83217743d24",
    "isActive": false,
    "age": 28,
    "name": "Ilene Copeland",
    "gender": "female",
    "company": "QUOTEZART",
    "email": "ilenecopeland@quotezart.com",
    "phone": "+1 (922) 511-3593",
    "address": "208 Vanderbilt Avenue, Abiquiu, Louisiana, 2263",
    "about": "Duis nulla elit id ex anim qui eu. Enim voluptate incididunt exercitation consectetur officia labore mollit. Cillum sint officia ex eiusmod incididunt sit exercitation duis proident.\r\n",
    "date_of_birth": "2022-04-06T12:49:26 -06:-30",
    "latitude": 63.962183,
    "longitude": -179.544539
  },
  {
    "_id": "65ba4eb212e1f1550b4d04a2",
    "isActive": true,
    "age": 36,
    "name": "Robertson Christensen",
    "gender": "male",
    "company": "IZZBY",
    "email": "robertsonchristensen@izzby.com",
    "phone": "+1 (948) 445-3655",
    "address": "891 Story Street, Brantleyville, Michigan, 3028",
    "about": "Veniam voluptate aliqua deserunt consectetur aliqua aute amet. Veniam labore esse anim quis ut non Lorem adipisicing qui nostrud deserunt pariatur. Adipisicing magna commodo occaecat eu consectetur.\r\n",
    "date_of_birth": "2019-07-18T03:17:58 -06:-30",
    "latitude": -36.386185,
    "longitude": 64.481224
  },
  {
    "_id": "65ba4eb215e2e3d94e00801e",
    "isActive": false,
    "age": 33,
    "name": "Elizabeth Sutton",
    "gender": "female",
    "company": "ISOLOGIX",
    "email": "elizabethsutton@isologix.com",
    "phone": "+1 (806) 408-3236",
    "address": "377 Railroad Avenue, Orovada, Florida, 3349",
    "about": "Voluptate eiusmod duis irure ut officia sunt consectetur consectetur minim est. In ad qui nisi ad in in irure. Voluptate quis deserunt reprehenderit id sit nisi. Deserunt dolore excepteur esse irure in magna. Sit reprehenderit culpa do aliqua et et Lorem aliqua dolore exercitation id sit aute. Mollit veniam reprehenderit fugiat consequat ad dolor veniam officia excepteur laborum veniam.\r\n",
    "date_of_birth": "2022-08-29T12:54:13 -06:-30",
    "latitude": 30.819752,
    "longitude": 67.607278
  },
  {
    "_id": "65ba4eb207faa5c602e16db7",
    "isActive": false,
    "age": 27,
    "name": "Moran Odom",
    "gender": "male",
    "company": "DOGNOSIS",
    "email": "moranodom@dognosis.com",
    "phone": "+1 (845) 574-2043",
    "address": "150 Sunnyside Court, Newry, South Carolina, 9036",
    "about": "Ea non id ut fugiat do elit nulla nostrud esse tempor consequat esse. Est in sint occaecat deserunt ipsum deserunt cillum nulla voluptate amet exercitation tempor fugiat. Nulla proident enim nostrud reprehenderit ullamco proident. Consectetur minim officia aute nostrud velit veniam cupidatat excepteur. Veniam cillum occaecat sint et laborum quis commodo ipsum ea tempor incididunt. Proident in ea aliqua do dolore enim ea laboris elit sint excepteur culpa esse exercitation. Excepteur aute enim magna et minim anim aliqua officia veniam adipisicing ullamco enim.\r\n",
    "date_of_birth": "2022-12-16T10:27:23 -06:-30",
    "latitude": -32.198871,
    "longitude": 89.659255
  },
  {
    "_id": "65ba4eb296765e5df2a62ae1",
    "isActive": false,
    "age": 23,
    "name": "Adkins Houston",
    "gender": "male",
    "company": "REPETWIRE",
    "email": "adkinshouston@repetwire.com",
    "phone": "+1 (895) 451-3780",
    "address": "934 Dekoven Court, Elliott, Alaska, 882",
    "about": "Irure non deserunt fugiat anim magna culpa Lorem nulla. Culpa qui nulla ullamco occaecat aliqua ut. Lorem mollit id Lorem cupidatat do id nostrud cupidatat labore do qui ad sint in. Tempor deserunt sunt aute nostrud non fugiat reprehenderit pariatur nostrud enim sit. Reprehenderit fugiat velit voluptate mollit in ut cupidatat anim fugiat veniam. Quis ullamco in elit ipsum ad mollit aliquip deserunt consequat.\r\n",
    "date_of_birth": "2021-08-05T07:31:52 -06:-30",
    "latitude": 2.926513,
    "longitude": 147.126318
  },
  {
    "_id": "65ba4eb25d08d0f1957b5c55",
    "isActive": true,
    "age": 21,
    "name": "Owens Davis",
    "gender": "male",
    "company": "EURON",
    "email": "owensdavis@euron.com",
    "phone": "+1 (847) 413-2944",
    "address": "169 Hoyts Lane, Noblestown, Colorado, 6655",
    "about": "Do quis aliqua eiusmod enim voluptate sunt sint Lorem do id nostrud. Pariatur excepteur amet magna commodo irure occaecat et irure magna reprehenderit. Consectetur aliqua amet proident tempor ut laborum sint aliquip. Ullamco commodo nulla velit aliquip id consectetur sunt cillum.\r\n",
    "date_of_birth": "2014-01-31T01:15:29 -06:-30",
    "latitude": -67.55746,
    "longitude": -173.554027
  },
  {
    "_id": "65ba4eb248b3cd278b0e370c",
    "isActive": true,
    "age": 40,
    "name": "Price Foster",
    "gender": "male",
    "company": "ZENCO",
    "email": "pricefoster@zenco.com",
    "phone": "+1 (915) 425-2342",
    "address": "375 Columbus Place, Defiance, Maryland, 6205",
    "about": "Proident aliquip enim mollit consequat id esse consequat occaecat commodo laborum et incididunt nisi. Nulla qui cupidatat deserunt laboris aliqua. Esse non mollit labore magna commodo nulla occaecat amet. Do nisi reprehenderit cupidatat laboris id cillum in tempor.\r\n",
    "date_of_birth": "2017-05-09T05:53:58 -06:-30",
    "latitude": 25.036063,
    "longitude": -107.39227
  },
  {
    "_id": "65ba4eb2b34037e431601b7c",
    "isActive": true,
    "age": 34,
    "name": "Ora Strickland",
    "gender": "female",
    "company": "CORIANDER",
    "email": "orastrickland@coriander.com",
    "phone": "+1 (876) 413-2179",
    "address": "178 Schweikerts Walk, Biehle, Maine, 6515",
    "about": "Dolore incididunt irure excepteur id consequat commodo. Do aliqua do anim laborum amet. Duis sunt aliquip est cillum amet excepteur labore ad do adipisicing. Ex amet tempor minim ea aliqua culpa nisi. Et minim ad aliquip consequat nulla esse cillum. Culpa sint nisi consectetur magna excepteur.\r\n",
    "date_of_birth": "2024-01-11T08:47:42 -06:-30",
    "latitude": -20.460858,
    "longitude": 170.493196
  },
  {
    "_id": "65ba4eb29ea1efbf93100e57",
    "isActive": false,
    "age": 22,
    "name": "Alberta Cunningham",
    "gender": "female",
    "company": "UNIWORLD",
    "email": "albertacunningham@uniworld.com",
    "phone": "+1 (966) 442-2235",
    "address": "391 Seigel Court, Cobbtown, Texas, 5066",
    "about": "Laboris ex nisi fugiat do. Sunt magna pariatur occaecat aute. Laboris reprehenderit do labore eu.\r\n",
    "date_of_birth": "2020-09-28T05:10:06 -06:-30",
    "latitude": 18.394146,
    "longitude": 5.282308
  },
  {
    "_id": "65ba4eb2d4b9d39dad536dc4",
    "isActive": true,
    "age": 30,
    "name": "Deloris Pugh",
    "gender": "female",
    "company": "VALPREAL",
    "email": "delorispugh@valpreal.com",
    "phone": "+1 (899) 457-3764",
    "address": "640 Covert Street, Murillo, Massachusetts, 5916",
    "about": "Non minim eiusmod tempor tempor ullamco id non est non ut cupidatat. Incididunt consectetur proident do Lorem quis ea do qui occaecat. Est do sit commodo incididunt esse qui mollit exercitation nostrud anim magna pariatur cupidatat aliqua. Cillum eiusmod et in qui dolor esse laborum veniam anim do incididunt laboris voluptate magna. Non adipisicing pariatur aute nulla Lorem aliqua veniam consectetur minim laboris ex. Aliquip exercitation duis reprehenderit voluptate cillum elit sint nostrud fugiat esse reprehenderit.\r\n",
    "date_of_birth": "2021-01-13T07:14:25 -06:-30",
    "latitude": -42.363107,
    "longitude": -42.884851
  },
  {
    "_id": "65ba4eb220fe4fe2858371a6",
    "isActive": false,
    "age": 27,
    "name": "Williams Andrews",
    "gender": "male",
    "company": "ORBALIX",
    "email": "williamsandrews@orbalix.com",
    "phone": "+1 (954) 547-2495",
    "address": "182 Juliana Place, Trucksville, West Virginia, 3560",
    "about": "Veniam adipisicing dolore proident irure laborum labore laborum tempor eu. Anim velit quis ex fugiat do. Laboris et veniam id exercitation reprehenderit amet nostrud Lorem in deserunt excepteur id. Duis ullamco consectetur ut nisi sint ea laborum nisi ex sint. Dolor sit minim aliqua consequat consectetur exercitation sunt consectetur Lorem deserunt aliquip non duis enim. Velit mollit consectetur excepteur officia culpa. In aute reprehenderit ut ullamco amet officia.\r\n",
    "date_of_birth": "2021-06-18T06:12:51 -06:-30",
    "latitude": -44.864512,
    "longitude": -175.613298
  },
  {
    "_id": "65ba4eb25047576f4796bb15",
    "isActive": true,
    "age": 21,
    "name": "Ingrid Thornton",
    "gender": "female",
    "company": "ZILLATIDE",
    "email": "ingridthornton@zillatide.com",
    "phone": "+1 (924) 582-2018",
    "address": "423 Village Court, Elrama, Idaho, 6630",
    "about": "Quis laborum dolor velit voluptate non aliqua est Lorem quis dolore. Duis aute ut nostrud dolore commodo sint amet aliqua. Ex nostrud consectetur aliqua irure est aliquip eu commodo exercitation occaecat do proident duis. Cillum ea tempor laborum nulla veniam pariatur et id quis et eu adipisicing. Quis ex ad aute eiusmod enim irure quis excepteur sit occaecat mollit. Est irure anim sunt labore laborum duis dolor adipisicing aliquip nisi nulla. Magna velit sint eu ipsum ex est est pariatur proident anim eiusmod excepteur duis.\r\n",
    "date_of_birth": "2019-05-19T09:44:39 -06:-30",
    "latitude": 58.703966,
    "longitude": -132.493553
  },
  {
    "_id": "65ba4eb24aacf90d8fb8a390",
    "isActive": true,
    "age": 20,
    "name": "Fran Reynolds",
    "gender": "female",
    "company": "GROK",
    "email": "franreynolds@grok.com",
    "phone": "+1 (968) 569-2855",
    "address": "565 Buffalo Avenue, Tonopah, Connecticut, 4196",
    "about": "Sit nulla tempor laborum incididunt proident ullamco enim do incididunt. Cupidatat adipisicing pariatur elit sunt ut duis est esse magna officia. Veniam cillum sunt occaecat nisi deserunt eiusmod nostrud esse qui eu ullamco ut veniam. Id tempor qui cillum fugiat qui sint dolor ex eiusmod id. Officia nostrud esse qui eu excepteur do aliqua velit exercitation enim. Anim occaecat aliquip est voluptate nulla veniam excepteur. Nisi Lorem ad voluptate in fugiat cupidatat ut elit.\r\n",
    "date_of_birth": "2022-09-15T06:24:30 -06:-30",
    "latitude": -86.472735,
    "longitude": -102.70153
  },
  {
    "_id": "65ba4eb2b96c8fd70603ff6c",
    "isActive": true,
    "age": 20,
    "name": "Mullins Hobbs",
    "gender": "male",
    "company": "QUINEX",
    "email": "mullinshobbs@quinex.com",
    "phone": "+1 (868) 595-2535",
    "address": "223 Joralemon Street, Cherokee, Virginia, 9204",
    "about": "Non velit exercitation proident voluptate officia sint. Incididunt elit sunt deserunt nulla commodo magna aliqua ex cillum commodo laboris. Nisi qui eiusmod velit officia dolor deserunt. Duis non duis consectetur nisi quis ex id velit aliquip reprehenderit ipsum sit proident consectetur. Pariatur duis minim magna qui commodo irure. Anim Lorem nulla ipsum veniam pariatur anim cupidatat.\r\n",
    "date_of_birth": "2020-12-10T04:22:22 -06:-30",
    "latitude": -64.860608,
    "longitude": 29.002491
  },
  {
    "_id": "65ba4eb2e44835738776280e",
    "isActive": true,
    "age": 28,
    "name": "Ratliff Molina",
    "gender": "male",
    "company": "QUONK",
    "email": "ratliffmolina@quonk.com",
    "phone": "+1 (801) 557-2110",
    "address": "180 River Street, Twilight, North Dakota, 3218",
    "about": "Esse et voluptate consectetur aute duis minim est est consequat duis velit pariatur. Quis nostrud id adipisicing ullamco laborum proident. Enim veniam amet eu Lorem qui sunt adipisicing occaecat. Ullamco occaecat dolor ullamco nisi dolor nulla cillum consequat non ea nostrud nulla excepteur.\r\n",
    "date_of_birth": "2023-05-28T10:56:20 -06:-30",
    "latitude": -25.417262,
    "longitude": 161.257766
  },
  {
    "_id": "65ba4eb29ad80d9f4e3fe080",
    "isActive": false,
    "age": 32,
    "name": "Hahn Abbott",
    "gender": "male",
    "company": "ENDIPIN",
    "email": "hahnabbott@endipin.com",
    "phone": "+1 (932) 506-2279",
    "address": "725 Cooke Court, Canterwood, Kansas, 4072",
    "about": "Mollit voluptate ea duis id elit culpa officia. Et eu sint irure duis magna. Adipisicing mollit et aliqua dolor occaecat in esse eu dolore velit elit eiusmod. Proident occaecat dolor incididunt mollit commodo qui quis ullamco. Occaecat ex cillum reprehenderit officia cillum incididunt nulla excepteur Lorem commodo excepteur exercitation nisi. Ea velit eu eu anim aliquip laboris adipisicing laborum officia in labore Lorem.\r\n",
    "date_of_birth": "2023-06-18T06:03:19 -06:-30",
    "latitude": -27.505728,
    "longitude": -95.8429
  },
  {
    "_id": "65ba4eb2da3a8792555f8c3b",
    "isActive": true,
    "age": 24,
    "name": "Olivia Burton",
    "gender": "female",
    "company": "GRUPOLI",
    "email": "oliviaburton@grupoli.com",
    "phone": "+1 (923) 428-2322",
    "address": "302 Remsen Street, Concho, Washington, 3305",
    "about": "Duis consectetur irure in tempor. Sint aliquip Lorem ad dolor cillum aliqua cupidatat. Eiusmod nulla non exercitation ullamco. Occaecat occaecat ipsum dolor quis minim adipisicing amet.\r\n",
    "date_of_birth": "2018-11-18T11:48:53 -06:-30",
    "latitude": -46.609942,
    "longitude": 168.305427
  },
  {
    "_id": "65ba4eb23d465f9a31758895",
    "isActive": false,
    "age": 38,
    "name": "Peterson David",
    "gender": "male",
    "company": "RETRACK",
    "email": "petersondavid@retrack.com",
    "phone": "+1 (909) 595-3984",
    "address": "973 Tompkins Avenue, Springville, Oregon, 2919",
    "about": "Dolore Lorem sunt duis dolore cupidatat cillum esse aute. Irure ut aute voluptate labore voluptate exercitation nisi enim ipsum esse ex aliquip. Tempor ullamco id incididunt labore.\r\n",
    "date_of_birth": "2014-11-10T10:28:32 -06:-30",
    "latitude": -36.570037,
    "longitude": -45.840455
  },
  {
    "_id": "65ba4eb2e27df2a3f03fe75c",
    "isActive": true,
    "age": 22,
    "name": "Dana Henderson",
    "gender": "female",
    "company": "ACLIMA",
    "email": "danahenderson@aclima.com",
    "phone": "+1 (836) 554-3271",
    "address": "351 Grant Avenue, Ypsilanti, Virgin Islands, 4561",
    "about": "Et veniam irure minim ad ullamco qui dolor quis aliqua dolor anim commodo cupidatat aute. Dolor ullamco qui sit anim labore. Dolore dolore eiusmod ad eiusmod sit. In nulla proident elit officia dolor consectetur voluptate laborum. Quis exercitation pariatur amet quis. Cupidatat non exercitation elit sunt exercitation quis pariatur culpa anim pariatur aliqua quis nostrud. Aliquip ipsum elit ipsum minim.\r\n",
    "date_of_birth": "2018-11-18T05:39:38 -06:-30",
    "latitude": 15.892588,
    "longitude": 111.056763
  },
  {
    "_id": "65ba4eb267033494bbefbfeb",
    "isActive": true,
    "age": 23,
    "name": "Rosalind Sullivan",
    "gender": "female",
    "company": "JAMNATION",
    "email": "rosalindsullivan@jamnation.com",
    "phone": "+1 (987) 523-2720",
    "address": "331 Wyckoff Avenue, Bartley, Iowa, 9214",
    "about": "Incididunt minim et commodo commodo nulla id sunt enim dolor mollit. Consectetur ullamco laboris excepteur ea eu excepteur laborum est exercitation labore. Elit dolor voluptate adipisicing enim tempor aliquip ea qui. Est dolor sit do sint aliquip. Pariatur commodo tempor do minim esse amet incididunt aute ut dolore tempor.\r\n",
    "date_of_birth": "2019-01-09T06:34:00 -06:-30",
    "latitude": 86.398683,
    "longitude": 150.034337
  },
  {
    "_id": "65ba4eb2cf763ca1219b5322",
    "isActive": false,
    "age": 30,
    "name": "Moore Sweet",
    "gender": "male",
    "company": "HELIXO",
    "email": "mooresweet@helixo.com",
    "phone": "+1 (903) 547-2148",
    "address": "349 Sumpter Street, Alderpoint, Rhode Island, 6897",
    "about": "Tempor labore ut sint quis aute labore fugiat sint incididunt proident pariatur commodo ex. Esse consequat fugiat aliqua nisi reprehenderit aliqua ex. Id fugiat minim eiusmod ea ea sit cupidatat. Anim ad laborum occaecat anim cupidatat do. Exercitation eu ad aute eiusmod.\r\n",
    "date_of_birth": "2023-04-30T02:23:12 -06:-30",
    "latitude": 34.126197,
    "longitude": -85.819612
  },
  {
    "_id": "65ba4eb2f5945c3ec40db07e",
    "isActive": true,
    "age": 26,
    "name": "Montgomery Anthony",
    "gender": "male",
    "company": "ASSURITY",
    "email": "montgomeryanthony@assurity.com",
    "phone": "+1 (964) 540-3270",
    "address": "338 Grace Court, Vowinckel, New Mexico, 8838",
    "about": "Magna laboris duis non incididunt cupidatat aute tempor aliqua mollit in. Labore irure in aliqua aliqua non cillum laboris. Exercitation culpa nostrud in ea incididunt eu ea eiusmod duis incididunt velit elit. Exercitation aute dolore consectetur adipisicing id est exercitation excepteur. Velit commodo aliqua sint dolore nulla. Sint aute incididunt enim elit laboris dolor est sunt enim pariatur reprehenderit. Esse aliqua consectetur Lorem qui.\r\n",
    "date_of_birth": "2020-11-11T04:31:09 -06:-30",
    "latitude": 10.057874,
    "longitude": -3.678474
  },
  {
    "_id": "65ba4eb2ed3ad35ee644de8a",
    "isActive": false,
    "age": 27,
    "name": "Fanny Workman",
    "gender": "female",
    "company": "QUONATA",
    "email": "fannyworkman@quonata.com",
    "phone": "+1 (928) 535-3006",
    "address": "418 Moore Place, Mulberry, Guam, 579",
    "about": "Dolore labore ut irure eiusmod ipsum esse consequat eiusmod dolor velit reprehenderit magna. Labore duis ea aliquip ea. Tempor enim aute commodo fugiat deserunt Lorem nostrud eiusmod sit ad et excepteur eiusmod est. Qui duis ad nisi ex quis. Elit in velit esse fugiat deserunt sint adipisicing enim laborum ea esse incididunt eu. Est anim consectetur adipisicing culpa cupidatat velit laborum excepteur voluptate incididunt consequat culpa proident et. Officia commodo nisi nostrud tempor voluptate magna deserunt id non enim ut officia aute.\r\n",
    "date_of_birth": "2023-05-07T12:09:14 -06:-30",
    "latitude": -27.088259,
    "longitude": -93.403508
  },
  {
    "_id": "65ba4eb25e5e8591e9e346c1",
    "isActive": false,
    "age": 35,
    "name": "Cecile Hicks",
    "gender": "female",
    "company": "SURELOGIC",
    "email": "cecilehicks@surelogic.com",
    "phone": "+1 (824) 409-3397",
    "address": "719 Ditmas Avenue, Camas, New Jersey, 8732",
    "about": "Minim pariatur magna nulla magna aute ex eu duis est. Est adipisicing enim eu reprehenderit do sunt in enim elit. Duis enim amet eu ex ut tempor ipsum laborum eu. Adipisicing et deserunt amet qui. Lorem duis reprehenderit ipsum et in.\r\n",
    "date_of_birth": "2014-07-07T03:17:24 -06:-30",
    "latitude": -74.485963,
    "longitude": 22.715286
  },
  {
    "_id": "65ba4eb28d24a8303aa144b1",
    "isActive": false,
    "age": 36,
    "name": "Knowles Perkins",
    "gender": "male",
    "company": "CAPSCREEN",
    "email": "knowlesperkins@capscreen.com",
    "phone": "+1 (917) 450-2361",
    "address": "162 Roebling Street, Temperanceville, Wisconsin, 5550",
    "about": "Excepteur deserunt non aute ea ea aliqua aute ut ea aute ipsum. Ipsum occaecat enim occaecat ullamco labore voluptate cillum aliqua pariatur veniam esse anim Lorem. Deserunt velit tempor magna proident dolore laborum officia dolor velit nulla id proident.\r\n",
    "date_of_birth": "2021-11-04T05:25:44 -06:-30",
    "latitude": -71.088559,
    "longitude": 48.356044
  },
  {
    "_id": "65ba4eb2efe7353fa4e7f2cc",
    "isActive": true,
    "age": 39,
    "name": "Esperanza Sloan",
    "gender": "female",
    "company": "PHUEL",
    "email": "esperanzasloan@phuel.com",
    "phone": "+1 (878) 462-2718",
    "address": "408 Jackson Street, Gorst, Ohio, 1790",
    "about": "Nisi cupidatat sint laborum aliqua anim. Sit voluptate eu velit esse ad non deserunt duis. Reprehenderit excepteur nulla ad in proident aliquip do est sunt do.\r\n",
    "date_of_birth": "2020-05-25T04:26:07 -06:-30",
    "latitude": 86.371731,
    "longitude": -95.175274
  },
  {
    "_id": "65ba4eb26df1071f41513b56",
    "isActive": false,
    "age": 38,
    "name": "Owen Patton",
    "gender": "male",
    "company": "SONGBIRD",
    "email": "owenpatton@songbird.com",
    "phone": "+1 (997) 518-2865",
    "address": "893 Herkimer Street, Rosewood, Utah, 5749",
    "about": "Do in id et nulla nulla sunt magna amet culpa anim. Ipsum consequat non laboris ex qui pariatur reprehenderit. Cillum incididunt laborum amet voluptate ipsum est officia ea eu sit ullamco commodo. Aliqua consequat veniam nulla voluptate deserunt sit esse non occaecat consequat qui culpa magna enim.\r\n",
    "date_of_birth": "2023-08-01T12:27:28 -06:-30",
    "latitude": 38.835813,
    "longitude": 8.090261
  },
  {
    "_id": "65ba4eb2e0738497b27912a8",
    "isActive": false,
    "age": 20,
    "name": "Sofia Dudley",
    "gender": "female",
    "company": "EDECINE",
    "email": "sofiadudley@edecine.com",
    "phone": "+1 (807) 576-2465",
    "address": "178 Sullivan Place, Detroit, American Samoa, 3407",
    "about": "Et dolore laboris laborum voluptate do aliquip labore ea. Eu qui dolor mollit magna fugiat labore voluptate tempor in aliqua. Fugiat excepteur aute laborum Lorem voluptate. Cillum labore elit irure consequat pariatur dolor laboris id amet sint duis mollit laborum. Tempor anim qui nisi proident ut in ut consequat eiusmod qui non.\r\n",
    "date_of_birth": "2016-12-13T10:34:18 -06:-30",
    "latitude": 19.694889,
    "longitude": -34.501547
  },
  {
    "_id": "65ba4eb23285f74e68627e77",
    "isActive": false,
    "age": 39,
    "name": "Barlow Payne",
    "gender": "male",
    "company": "SOFTMICRO",
    "email": "barlowpayne@softmicro.com",
    "phone": "+1 (880) 571-3304",
    "address": "191 Lott Place, Colton, District Of Columbia, 9356",
    "about": "Officia ipsum aliquip incididunt occaecat commodo id. Dolor sit sit ad veniam. Sit dolor labore commodo anim. Cillum aliquip excepteur veniam nisi nisi cupidatat do pariatur velit tempor. Eiusmod duis id cillum nostrud culpa ea.\r\n",
    "date_of_birth": "2020-02-01T07:42:13 -06:-30",
    "latitude": 52.280376,
    "longitude": -91.922204
  },
  {
    "_id": "65ba4eb2602b9b0bc9fd5838",
    "isActive": true,
    "age": 32,
    "name": "Velazquez Harrell",
    "gender": "male",
    "company": "MALATHION",
    "email": "velazquezharrell@malathion.com",
    "phone": "+1 (888) 591-3477",
    "address": "621 Christopher Avenue, Enetai, Arizona, 3733",
    "about": "Voluptate irure sunt et amet eiusmod eiusmod magna nisi ex esse est velit incididunt. Anim ipsum laborum exercitation sint officia ut consequat proident. Labore elit exercitation amet laborum ipsum tempor eu aute eiusmod deserunt sint.\r\n",
    "date_of_birth": "2020-01-08T03:25:44 -06:-30",
    "latitude": 50.859523,
    "longitude": -124.184456
  },
  {
    "_id": "65ba4eb223e4b1a5a8c9a556",
    "isActive": true,
    "age": 36,
    "name": "Bradley Madden",
    "gender": "male",
    "company": "COFINE",
    "email": "bradleymadden@cofine.com",
    "phone": "+1 (826) 476-3882",
    "address": "854 Chester Street, Brogan, South Dakota, 9039",
    "about": "Consectetur officia irure aliquip exercitation tempor id tempor proident minim aute anim exercitation dolore nulla. Voluptate deserunt cupidatat consectetur amet anim duis Lorem eu et eiusmod fugiat eu officia aliquip. Adipisicing nulla cupidatat sunt voluptate nisi amet consequat laborum. Ullamco sint sint ullamco minim fugiat in veniam magna ad. Dolor dolore commodo nostrud non.\r\n",
    "date_of_birth": "2016-04-29T07:35:48 -06:-30",
    "latitude": 77.4427,
    "longitude": -84.209195
  },
  {
    "_id": "65ba4eb2878d972686450954",
    "isActive": true,
    "age": 38,
    "name": "Lorie Rogers",
    "gender": "female",
    "company": "MOMENTIA",
    "email": "lorierogers@momentia.com",
    "phone": "+1 (855) 503-3228",
    "address": "334 Norwood Avenue, Oceola, Minnesota, 9897",
    "about": "Incididunt fugiat commodo occaecat labore excepteur Lorem qui tempor commodo sint occaecat. Adipisicing tempor mollit consequat ea nisi labore nulla nisi ex. Voluptate irure sunt id sint non amet et. Excepteur veniam ad officia duis consectetur adipisicing consectetur voluptate cupidatat reprehenderit ullamco velit laboris. Pariatur quis anim magna ex incididunt magna ullamco consequat tempor qui consequat adipisicing ex. Officia culpa magna tempor dolore nulla aliquip cupidatat enim labore labore cupidatat. Labore proident excepteur labore culpa Lorem ad consequat dolore.\r\n",
    "date_of_birth": "2023-07-10T03:18:02 -06:-30",
    "latitude": -52.380442,
    "longitude": -51.0019
  },
  {
    "_id": "65ba4eb2c3765c3ab85b9b8a",
    "isActive": true,
    "age": 32,
    "name": "Blevins Clark",
    "gender": "male",
    "company": "ENERVATE",
    "email": "blevinsclark@enervate.com",
    "phone": "+1 (961) 446-2866",
    "address": "589 Vermont Street, Dennard, Alabama, 4224",
    "about": "Consequat pariatur proident esse dolore excepteur veniam proident officia ipsum et commodo sunt ipsum. Ex sit excepteur veniam reprehenderit voluptate officia nisi est anim cillum est. Irure aliquip eiusmod culpa et do in tempor ex. Sint aute duis minim fugiat esse dolor magna voluptate anim. Velit mollit enim Lorem id labore sit anim tempor id fugiat. Et eiusmod cillum aliquip dolore in sit aliqua quis esse.\r\n",
    "date_of_birth": "2020-10-02T04:40:50 -06:-30",
    "latitude": 61.268009,
    "longitude": -112.379697
  },
  {
    "_id": "65ba4eb2c2a04ac66705ea04",
    "isActive": false,
    "age": 35,
    "name": "Curry Watkins",
    "gender": "male",
    "company": "OTHERSIDE",
    "email": "currywatkins@otherside.com",
    "phone": "+1 (928) 474-2007",
    "address": "934 Lawton Street, Mayfair, Federated States Of Micronesia, 1587",
    "about": "Laboris qui minim laboris deserunt incididunt ullamco mollit cupidatat pariatur eu. Mollit non amet laboris sint ea dolor nostrud veniam Lorem. Nostrud non reprehenderit eu amet aute anim esse anim. Ea irure commodo cupidatat pariatur proident quis cupidatat magna fugiat occaecat. Tempor ipsum labore adipisicing labore officia laboris duis mollit et anim eu ut. Veniam excepteur esse in proident consectetur elit in do in. Incididunt eiusmod aute nisi reprehenderit Lorem adipisicing.\r\n",
    "date_of_birth": "2020-01-25T05:41:46 -06:-30",
    "latitude": -55.439358,
    "longitude": -124.545971
  },
  {
    "_id": "65ba4eb2c7bc2ad773abee62",
    "isActive": true,
    "age": 30,
    "name": "Morton Dorsey",
    "gender": "male",
    "company": "ZANITY",
    "email": "mortondorsey@zanity.com",
    "phone": "+1 (807) 496-3603",
    "address": "864 Prospect Place, Valle, Missouri, 4915",
    "about": "Eiusmod elit quis ea ipsum ipsum ex labore. Tempor deserunt aliquip pariatur enim irure minim esse anim aute elit. Ipsum officia et veniam ipsum sit reprehenderit eu. Aliquip nulla dolore aliqua enim nulla sit pariatur qui velit magna. Culpa id ad enim esse duis ea. Irure occaecat aliquip ut irure ipsum irure ipsum occaecat deserunt.\r\n",
    "date_of_birth": "2017-06-04T08:46:34 -06:-30",
    "latitude": 83.074957,
    "longitude": -135.949643
  },
  {
    "_id": "65ba4eb24f9d09749d55b2df",
    "isActive": false,
    "age": 32,
    "name": "Snyder Chambers",
    "gender": "male",
    "company": "MACRONAUT",
    "email": "snyderchambers@macronaut.com",
    "phone": "+1 (965) 424-2073",
    "address": "422 Fenimore Street, Edgar, Hawaii, 1780",
    "about": "Sint fugiat in enim mollit Lorem ut. Elit dolore velit amet velit sint aliqua voluptate consectetur nisi id et aute aliqua. Magna exercitation consectetur et pariatur reprehenderit ipsum id id minim et officia quis. In dolor ut amet id excepteur tempor cillum pariatur aliquip laborum veniam sint labore. Velit pariatur consectetur nisi sit dolore laborum proident officia cillum adipisicing do nulla exercitation. Eiusmod amet culpa commodo ipsum amet.\r\n",
    "date_of_birth": "2017-01-28T02:48:50 -06:-30",
    "latitude": 28.253337,
    "longitude": 85.273362
  },
  {
    "_id": "65ba4eb2c11305ef7d5ce765",
    "isActive": false,
    "age": 34,
    "name": "Cathy Cotton",
    "gender": "female",
    "company": "IMAGINART",
    "email": "cathycotton@imaginart.com",
    "phone": "+1 (807) 583-3025",
    "address": "641 Dearborn Court, Laurelton, Tennessee, 4924",
    "about": "Id irure elit dolore velit. Enim deserunt exercitation laboris consectetur aliquip laborum dolor aliqua exercitation. Eiusmod commodo nostrud nisi eu consectetur nulla irure.\r\n",
    "date_of_birth": "2020-12-19T09:23:49 -06:-30",
    "latitude": -59.146227,
    "longitude": -105.494085
  }
];

const Dashboard = () => {

     const firstFiveUsers = userData.slice(0,5);
  
  return (
    <div className=" w-100">
      <div className='my-3'>
        <span className='fw-bold mx-3'>Flow Charts</span>
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='mx-3 mx-lg-5'>
          <img src={card_1} className='d-md-none' style={{ width:'100%',height:'auto'}}/>
          <img src={card_1} className='mx-5 d-none d-md-inline-flex' style={{ width:'250px',height:'auto'}}/>
        </div>
        <div className='mx-3 mt-3 mt-md-0 ms-lg-5'>
          <img src={card_2} style={{ width:'100%',height:'auto'}}/>
        </div>
      </div>
      <div className='mx-3 mt-4' style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <table className="table m-0 w-100">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ISACTIVE</th>
              <th scope="col">AGE</th>
              <th scope="col">NAME</th>
              <th scope="col">GENDER</th>
              <th scope="col">COMPANY</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">ABOUT</th>
              <th scope="col">DATE OF BIRTH</th>
              <th scope="col">LATITUDE</th>
              <th scope="col">LONGITUDE</th>
            </tr>
          </thead>
          <tbody>
          {firstFiveUsers.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.isActive}</td>
                  <td nowrap>{user.age}</td>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.company}</td>
                  <td>{user.email}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.phone}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.address}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{user.about}</td>
                  <td >{user.date_of_birth}</td>
                  <td>{user.latitude}</td>
                  <td>{user.longitude}</td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default Dashboard;

{/* <div className='col-12 col-lg-6 ms-2 my-3'>
        <div>
          <span className='fw-bold'>Flow Charts</span>
        </div>
        <div className='d-md-flex'>
          <div className='mx-2 ms-md-5'>
            <img src={card_1} alt="Card 1" className='d-none d-lg-inline-flex' style={{ width: '350px', height: 'auto' }} />
            <img src={card_1} alt="Card 1" className='d-none d-md-inline-flex d-lg-none' style={{ width: '250px', height: 'auto' }} />
            <img src={card_1} alt="Card 1" className='d-md-none' style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className='mx-2 mt-3 mt-md-0 ms-md-5'>
            <img src={card_2} alt="Card 2" className='d-lg-none' style={{ width: '100%', height: 'auto' }} />
            <img src={card_2} alt="Card 2" className='d-none d-lg-inline-flex' style={{ width: '400px', height: 'auto' }} />
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-6'>
        <div className='ms-2'>
          <span className='fw-bold'>Table</span>
        </div>
        <div className='ms-3' style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">FIRSTNAME</th>
              <th scope="col">LASTNAME</th>
              <th scope="col">EMAIL ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Kavin</td>
              <td>Kumar</td>
              <td>KavinKumar@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Logan</td>
              <td>athan</td>
              <td>logonaathan@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jaavith</td>
              <td>V</td>
              <td>Jaavith@gmail.com</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div> */}