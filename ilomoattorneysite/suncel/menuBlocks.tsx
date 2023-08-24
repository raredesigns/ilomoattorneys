import { MenuBlockSchema } from "@suncel/nextjs";
import { TitleAndSub } from "./blocks/hero/titleAndSub";
import { HeroFlowBite } from "./blocks/hero/heroFlowBite";
import { HeroFlowBite2 } from "./blocks/hero/heroFlowBite2";
import { feature } from "./blocks/feature";
import { cta1 } from "./blocks/cta/cta-1";
import { cta2 } from "./blocks/cta/cta-2";
import { cta3 } from "./blocks/cta/cta-3";
import { content1 } from "./blocks/content/content-1";
import { content2 } from "./blocks/content/content-2";
import { header } from "./blocks/header";
import { team1 } from "./blocks/team/team-1";
import { team2 } from "./blocks/team/team-2";
import { footer1 } from "./blocks/footer/footer-1";
import { footer2 } from "./blocks/footer/footer-2";

export const menuBlocks: MenuBlockSchema[] = [
  {
    category: "Page blocks",
    blocks: [
      {
        name: "Hero",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",
            component: TitleAndSub,
            name: "Title And Sub Hero",
            description: "A simple title and one optional subtitle",
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: HeroFlowBite,
            name: 'Hero Flow Bite'
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: HeroFlowBite2,
            name: 'Hero Flow Bite 2'
          },                   
        ],
      },
      {
        name: "Featured",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: feature,
            name: 'Feature Section'
          }, 
        ],
      },
      {
        name: "CTA",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: cta1,
            name: 'CTA Section'
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: cta2,
            name: 'CTA Section'
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: cta3,
            name: 'CTA Section'
          },                    
        ],
      },
      {
        name: "Content",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: content1,
            name: 'Content 1'
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: content2,
            name: 'Content 2'
          },                  
        ],
      },
      {
        name: "Header",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: header,
            name: 'Header'
          },                 
        ],
      },
      {
        name: "Team",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: team1,
            name: 'Team 1'
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: team2,
            name: 'Team 2'
          },                          
        ],
      },
      {
        name: "Footer",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: footer1,
            name: 'Footer 1'
          },
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",            
            component: footer2,
            name: 'Footer 2'
          },                          
        ],
      },                           
    ],
  },
];
