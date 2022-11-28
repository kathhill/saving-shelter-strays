import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import animals from "../images/animals-512.png"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to main content
      </a>
      <header className="bg-sky-600">
        <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
          <Link to="/">
            <h1 className="flex items-center text-white no-underline">
              <img src={animals} alt="" className="w-[150px] pr-4" />
              <span className="text-xl font-bold tracking-tight">
                {site.siteMetadata.title}
              </span>
            </h1>
          </Link>

          <button
            className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto`}
          >
            {/* {[
              {
                route: `/about`,
                title: `About`,
              },
              {
                route: `/contact`,
                title: `Contact`,
              },
            ].map(link => (
              <Link
                className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))} */}
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
              className="p-3 mb-4 text-2xl font-bold mx-auto"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="EVPZN4D72CGAJ"
              />
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
          </nav>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
