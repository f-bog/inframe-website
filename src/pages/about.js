import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../components/content/HeroSection"
import { StaticImage } from "gatsby-plugin-image"
import ContentSection from "../components/content/ContentSection"
import TwoColumnBlock from "../components/content/twoColumnBlock"
const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <HeroSection title="About Us">
        <StaticImage
          src="../images/film-production-discounts.png"
          quality={100}
          width={700}
          alt="Media production lighting"
          formats={["AUTO", "WEBP", "AVIF"]}
          style={{ width: "100%", height: "500px" }}
        />
      </HeroSection>
      <ContentSection center="center">
        <h1>
          About <span>Us</span>
        </h1>
        <hr />
        <p>
          InFrame Media Productions opened their firststudio in the Philippines
          through its founder, Pablo Llige, in 1990. From then on, InFrame Media
          Productions has been in the forefront of media coverage for everything
          from AVP's, Photo and Video Coverage and Editing services. InFrame
          Media Productions is a highly sought-after outfit as its reputation
          for high level professional media services remains unsurpassed.
        </p>
        <p>
          Following in his father’s footsteps, Kim Rafael Llige has opened
          InFrame Media Productions’ first studio on the Gold Coast in
          Australia. Kim offers a variety of services including Editing,
          Videographer and Photography as well as Video AVP, Sports, Photography
          and Event Coverage.
        </p>
        <p>
          Kim Rafael Llige earned a Bachelors Degree in Digital Film Making from
          De La Salle University. He has over eight years experience as a Video
          Camera Operator for a prime-time National Television Network as well
          as two years experience in Video-Directing and shooting various major
          Corporate Events.
        </p>
      </ContentSection>
      <ContentSection>
        <TwoColumnBlock center="center">
          <StaticImage
            src="../images/Kim-Rafael-Llige.png"
            quality={100}
            width={500}
            alt="Kim Rafael Llige"
            formats={["AUTO", "WEBP", "AVIF"]}
            style={{ maxWidth: "500px" }}
          />
          <StaticImage
            src="../images/inframe-philippines.png"
            quality={100}
            width={500}
            alt="InFrame Meda Productions Crew"
            formats={["AUTO", "WEBP", "AVIF"]}
            style={{ maxWidth: "500px" }}
          />
        </TwoColumnBlock>
      </ContentSection>
    </Layout>
  )
}

export default AboutPage
