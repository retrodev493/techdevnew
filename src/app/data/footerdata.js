import Assets from "../../../public/Asset";

export const footerLink = {
      title: "Begin right away!",
      subcontent: "Requires just a fraction of a minute from your schedule.",
      buttontext: "Connect Us",
    sublink: [
      {
        title: "Company",
        links: [
          {
            name: "about",  
            link: "./about",
          },
          {
            name: "solutions",
            link: "./solutions",
          },
          {
            name: "industry",
            link: "./industry",
          },
          {
            name: "case studies",
            link: "./casestudies",
          },
          {
            name: "Contact us",
            link: "./contactus",
          },
          {
            name: "Carrers",
            link: "./careers",
          },
        ],
      },
      {
        title: "Products",
        links: [
          {
            name: "inSITE",
            link: "./insite",
          },
          {
            name: "SimpleRetail",
            link: "./simpleretail",
          },
          {
            name: "CeleRITE",
            link: "./celerite",
          },
          {
            name: "nEXIM ",
            link: "./Nexim",
          },
          {
            name: "InSITE ",
            link: "./insite",
          },
          {
            name: "Iris",
            link: "./iris",
          },
        ],
      },
      {
        title: "Insights",
        links: [
          {
            name: "Blogs",
            link: "./blogs",
          },
          {
            name: "videos",
            link: "./videos",
          },
          {
            name: "White paper",
            link: "./whitepaper",
          },
          {
            name: "Success stories",
            link: "./successstories",
          },
        ],  
      },
    ],
      

      address : {
        title: "Address",
        data: [
          {
            address_line: "33507 9th Avenue S, Ste DFederal ",
            link:'',
          },
          {
            address_line: "Way, WA-98003",
            link:"",
          }
        ],
      },
  
     contacts: {
        title: "Contact",
        contacts: 
          {
            Ph_num: {
                text:"+1(206) 249-0900",
                link :"/"
            },
            email: {
                text:"contact@applexus.com",
                link:'/'
            }
          },
      
      },

      terms : {
        term:[
          {
            title:"Terms and Conditions",
            link:'/terms'
          },
          {
            title:"Privacy Policy",
            link:'/policy'
          }
        ]
      },

      follow:{
        title:'Follow Us',
        data:[
         {
          src:Assets.facebook,
          link:'/facebook',
          width:16.74,
          height:15.72,
          alt:'Facebook'
         },
         {
          src:Assets.instagram,
          link:'/instagram',
          width:16.74,
          height:16.74,
          alt:'instagram'

         },
         {
          src:Assets.linkedin,
          link:'/linkedin',
          width:16.81,
          height:16.81,
          alt:'linkedin'

         },
         {
          src:Assets.youtube,
          link:'/youtube',
          width:20.38,
          height:14.26,
          alt:'youtube'

         },
         {
          src:Assets.twitter,
          link:'/twitter',
          width:16.6,
          height:15.72,
          alt:'twitter'

         }
        ]
      },

     partners:{
      title:"Our Partners",
      data:[
        {
          src:Assets.partnerposter1,
          link:'/youtube',
          width:123,
          height:193,
          alt:'partners'
         },
         {
          src:Assets.partnerposter2,
          link:'/youtube',
          width:123,
          height:78,
          alt:'partners'
         },
         {
          src:Assets.partnerposter3,
          link:'/youtube',
          width:123,
          height:50,
          alt:'partners'
         },
      
      ]
     }

  };