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
