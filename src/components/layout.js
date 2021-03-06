/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import styled from 'styled-components'
import colors from '../helpers/colors'

const Layout = ({ children, color }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<LayoutWrapper background={color}>
			<Header
				color={color}
				siteTitle={data.site.siteMetadata?.title || `Title`}
			/>
			{children}
		</LayoutWrapper>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: ${props => props.background};
	overflow: hidden;
	box-sizing: border-box;
	& * {
		color: ${colors.white};
	}
`

export default Layout
