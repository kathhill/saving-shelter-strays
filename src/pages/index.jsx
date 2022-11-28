import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import siteLogo from "../images/saving-shelter-strays-logo.png"
import givingTuesdayLogoColor from "../images/giving-tuesday-logo-color-stacked.png"
import doggies from "../images/doggies.png"
import titos from "../images/titos.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="bg-sky-200 py-4">
      <div className="mx-auto max-w-5xl pt-12 pb-6 px-8">
        <h1>
          <img
            src={siteLogo}
            alt="Saving Shelter Strays"
            className="max-w-xs mx-auto"
          />
        </h1>
        <h2 className="font-semibold text-center pb-4">
          Together we can save Texas throw-aways, one dog (and kitties too!) at
          a time.
        </h2>
        <p className="px-4 text-center">
          Please help us during this time of Giving. Every dollar collected goes
          towards benefitting the shelter dogs in Texas and helps them reach
          their new forever homes.
        </p>
      </div>
    </section>
    <section className="text-center py-8">
      <div className="mx-auto max-w-5xl pt-0 pb-6 px-8">
        <h2 className="">
          <img
            alt="Giving Tuesday"
            className="block w-1/2 mx-auto mb-8"
            src={givingTuesdayLogoColor}
          />
        </h2>

        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
          className="p-3 mb-4 text-2xl font-bold"
        >
          <input type="hidden" name="hosted_button_id" value="EVPZN4D72CGAJ" />
          <input
            type="submit"
            name="submit"
            className="bg-[#f57f29] hover:bg-[#cf5d09]  cursor-pointer px-4 py-2 text-white font-bold rounded-lg"
            value="Donate Today!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
        <img src={doggies} alt="" />
      </div>
    </section>
    <section className="pt-12 pb-4 bg-gray-900 text-center">
      <div className="mx-auto max-w-5xl pt-0 pb-6 px-12">
        <h2 className="text-white text-center lg:px-40">
          Your donation doubles with Tito's Handmade Vodka's Vodka for Dog
          People Matching Campaign!
        </h2>
        <img className="block mx-auto lg:max-w-[500px]" src={titos} alt="" />
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
          className="p-3 mb-4 text-2xl font-bold mx-auto"
        >
          <input type="hidden" name="hosted_button_id" value="EVPZN4D72CGAJ" />
          <input
            type="submit"
            name="submit"
            className="bg-[#f57f29] hover:bg-[#cf5d09] cursor-pointer px-4 py-2 text-white font-bold rounded-lg"
            value="Donate Today!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </section>
  </Layout>
)

export default IndexPage
