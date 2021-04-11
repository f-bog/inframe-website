import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../components/Button"
import Layout from "../components/layout"
import ContentSection from "../components/content/ContentSection"
import HeroSection from "../components/content/HeroSection"
import TwoColumnBlock from "../components/content/twoColumnBlock"
import SEO from "../components/seo"
import ServicesButton from "../components/sections/Services/ServicesButton"

const services = () => {
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
          Video Production <span>Services</span>
        </h1>
        <hr />
      </ContentSection>
      <ContentSection>
        <p>
          InFrame Media Productions is a full service Gold Coast based video
          production and creative services company. But really…we help you tell
          stories.
        </p>
        <p>
          We’ve been doing what we love since 1999. The tools of our trade are
          curiosity, creativity, attentiveness, and partnership.. We specialize
          in creating media that connects with your audience in powerful ways.
          We do this through many formats including:
        </p>
      </ContentSection>
      <ContentSection>
        <ServicesButton text="Branding Videos" linkTo="/" />
        <ServicesButton text="Product Videos" linkTo="/" />
        <ServicesButton text="Web Videos" linkTo="/" />
        <ServicesButton text="Commercials" linkTo="/" />
        <ServicesButton text="Testimonial Videos" linkTo="/" />
        <ServicesButton text="Training Videos" linkTo="/" />
        <ServicesButton text="Live Event Videos" linkTo="/" />
        <ServicesButton text="Motion Graphics" linkTo="/" />
        <ServicesButton text="Sporting Videos" linkTo="/" />
        {/* <TwoColumnBlock center="center">
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
        </TwoColumnBlock> */}
      </ContentSection>
    </Layout>
  )
}

export default services
