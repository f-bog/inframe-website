// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import HomeHero from "../components/sections/Home/HomeHero"
// import AboutSection from "../components/sections/Home/AboutSection"
// import TestimonialSection from "../components/sections/Home/TestimonialSection"
// import ServicesSection from "../components/sections/Home/ServicesSection"
// import PortfolioSection from "../components/sections/Home/PortfolioSection"
// import ProcessSection from "../components/sections/Home/ProcessSection"
// import BlogSection from "../components/sections/Home/BlogSection"
// import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faFacebookSquare,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons"

// const IndexPage = () => (
//   <>
//     <SEO title="Gold Coast | Media Production Services" />
//     <UnderConstructionPage>
//       <div>
//         <StaticImage
//           src="../images/inframe-logo.png"
//           quality={95}
//           formats={["AUTO", "WEBP", "AVIF"]}
//           style={{ maxWidth: "500px" }}
//           alt="InFrame Logo"
//         />
//       </div>
//       <h1>Website Under Construction</h1>
//       <p>
//         Please contact us at{" "}
//         <a href="mailto:media@inframeaustralia.com.au">
//           media@inframeaustralia.com.au
//         </a>
//       </p>

//       <div className="social-links">
//         <a
//           href="https://www.instagram.com/inframe_media_prod/?hl=en"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//         <a
//           href="https://www.facebook.com/inframemediaproductions"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FontAwesomeIcon icon={faFacebookSquare} />
//         </a>
//         <a
//           href="https://au.linkedin.com/company/inframe-media-productions"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FontAwesomeIcon icon={faLinkedin} />
//         </a>
//       </div>
//     </UnderConstructionPage>
//   </>
// )

// const UnderConstructionPage = styled.div`
//   background: black;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   padding: 10px 30px;
//   h1 {
//     font-weight: lighter;
//     text-align: center;
//   }
//   p {
//     font-weight: 300;
//     font-family: helvetica;
//     text-align: center;
//     a {
//       text-decoration: underline;
//       color: white;
//       opacity: 75%;
//       &:hover {
//         color: #ed1c24;
//       }
//     }
//   }

//   .social-links {
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     a {
//       transition: all 0.2s ease-in-out;
//       &:hover {
//         opacity: 70%;
//       }
//       margin: 0 10px;
//       font-size: 60px;
//       color: white;
//     }
//   }
// `

// export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/sections/Home/HomeHero"
import AboutSection from "../components/sections/Home/AboutSection"
import TestimonialSection from "../components/sections/Home/TestimonialSection"
import ServicesSection from "../components/sections/Home/ServicesSection"
import PortfolioSection from "../components/sections/Home/PortfolioSection"
import ProcessSection from "../components/sections/Home/ProcessSection"
import BlogSection from "../components/sections/Home/BlogSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Gold Coast | Media Production Services" />
    <HomeHero />
    <AboutSection />
    <StaticImage
      src="../images/production-lighting.png"
      quality={100}
      width={500}
      alt="Media production lighting"
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{ width: "100%", height: "400px" }}
    />
    <ServicesSection />
    <PortfolioSection />
    <StaticImage
      src="../images/inframe-plains-photograph.png"
      quality={100}
      width={500}
      alt="Media production set"
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{ width: "100%", height: "400px" }}
    />
    <ProcessSection />
    <TestimonialSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
