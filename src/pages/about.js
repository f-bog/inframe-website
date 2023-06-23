import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../components/content/HeroSection"
import { StaticImage } from "gatsby-plugin-image"
import ContentSection from "../components/content/ContentSection"
import TwoColumnBlock from "../components/content/TwoColumnBlock"
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
          InFrame Media Productions opened their first studio in the Philippines
          through its founder, Pablo Llige, in 1990. From then on, InFrame Media
          Productions has been in the forefront of media coverage for everything
          from photo and video coverage and editing services.{" "}
        </p>
        <p>
          InFrame Media Productions is a highly sought-after outfit as its
          reputation for high level professional media services remains
          unsurpassed.
        </p>
        <p>
          Following in his father’s footsteps, Kim Rafael Llige has opened
          InFrame Media Productions’ first studio on the Gold Coast in
          Australia. Kim offers a variety of services including editing,
          videographer and photography as well as online content, sports
          photography and event coverage. Kim Rafael Llige earned a Bachelors
          Degree in Digital Film Making from De La Salle University.
        </p>
        <p>
          InFrame Media is a Gold Coast-based video production company that
          offers a full range of high-quality video production and photography
          services. Our talented and dedicated team of professionals are
          experienced in producing visually stunning content that tells a
          brand's story seamlessly. From concept development to script writing
          and camera work to editing, we are passionate about bringing stories
          to life through creative and effective visual media.
        </p>
        <p>
          Our goal is to produce video content and images that communicate a
          brand's message effectively, and we understand that every project is
          unique. That's why we offer customised video production solutions that
          suit individual business needs. Our equipment and industry knowledge
          enables us to deliver top quality results that exceed client
          expectations.
        </p>
        <p>
          Whether you need a corporate video, social media content, product
          launch video or simply want to capture an event, we got you covered.
          With our primary focus on providing exceptional video content, InFrame
          Media is the go-to video production company for businesses that want
          to engage and connect with their customers through visual media.
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
