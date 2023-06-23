import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import HeroSection from "../components/content/HeroSection"
import SEO from "../components/seo"
import ContentSection from "../components/content/ContentSection"

const ProcessPage = () => {
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
          Our <span>Process</span>
        </h1>
      </ContentSection>
      <ContentSection>
        <h2>Pre-Production</h2>
        <p>
          Our team offers pre-production services such as concept development
          and storyboarding. We brainstorm unique and creative video or photo
          ideas that align with your brand's values and goals, allowing your
          brand's story to be told both visually and convincingly.
        </p>
        <p>
          Our goal is to assist our clients in developing scripts, storylines,
          and shot lists tailored to their target audience's personality and
          preferences. InFrame Media Productions is dedicated to client
          satisfaction, and our wide range of pre-production services ensures
          that we can cater to each client's unique needs.{" "}
        </p>
      </ContentSection>
      <ContentSection>
        <h2>Production</h2>
        <p>Lights! Camera! Action!</p>
        <p>
          We've booked a filming day and all elements are lined up ready to go.
        </p>
        <p>
          The production phase is where creativity meets reality. At InFrame
          Media Productions, we pride ourselves on providing our clients with
          high-quality content that not only aligns with their brand's values
          and goals but also resonates with their target audience.
        </p>
        <p>
          Our team of experienced videographers and photographers ensures that
          the final footage is of high-quality, creatively filmed, and captures
          the essence of the brand. We work closely with our clients to ensure
          that we capture the right message that they want to communicate
          through their video.
        </p>
        <p>
          During the production phase, we assure our clients that the project is
          in the right hands. Our dedicated team works tirelessly to deliver all
          footage needed to make great content. We offer an array of services
          such as full production or stand-alone camera work, location scouting,
          and aerial footage.
        </p>
        <p>
          At InFrame Media Productions, we use equipment that ensures the
          highest resolution and sharpness of the footage. We guarantee that our
          clients are getting nothing but the best.
        </p>
        <p>
          Our team is flexible and can adjust to any filming situation. We have
          experience shooting live events, corporate presentations, and
          everything in-between. We pay particular attention to detail, ensuring
          that every shot is filmed to impress.
        </p>
        <p>
          We are committed to providing our clients with exceptional production
          services, and we are confident that our final product will surpass
          your expectations.
        </p>
      </ContentSection>
      <ContentSection>
        <h2>Production</h2>
        <p>
          Post-production is where our team excels. Our video editors cut and
          put together each clip, choosing the perfect music, graphics, and
          transitions to heighten the video's impact and message. Our video
          editing services include color correction, audio mixing, and color
          grading or adjustment.
        </p>
        <p>
          InFrame Media Productions also understands the importance of
          photography for businesses. We offer photo editing services that can
          help capture your brand's message in one image. Our expert team can
          enhance the raw images to convey what your brand is all about and
          creatively represent your business.
        </p>
        <p>
          We have been providing video production services for over a decade and
          operate across all of Australia. Our team of professionals is
          passionate about their work, and we guarantee that we will bring your
          story to life.
        </p>
      </ContentSection>
    </Layout>
  )
}

export default ProcessPage
