
describe('Directions component', () => {
  context('loads route from URL link', () => {
    it('shows the page setup correctly', () => {
      cy.visit('/#/directions/Mannheim,BW,Germany/Heidelberg,BW,Germany/data/%7B"coordinates":"8.492765,49.488789;8.692416,49.401247","options":%7B"zoom":8,"profile":"driving-car","preference":"recommended"%7D%7D')
      cy.viewport(1848, 980)
      cy.get('#app')
      cy.get('.app-content')
      cy.get('#map-view')
      cy.get('.sidebar')
    })

    it('shows the map view correctly', () => {
      cy.get('.simple-place-search').should('not.exist')
      cy.get('.view-on-ors').should('not.exist')
      cy.get('.v-snack__content')
      cy.get('.ors-toolbar').should('not.be.visible')
      cy.get('.leaflet-control-layers').should('be.visible')
      cy.get('.leaflet-control-zoom').should('be.visible')
      cy.get('.leaflet-draw').should('be.visible')
      cy.get('#polyline-measure-control').should('be.visible')
      cy.get('.my-location-btn').should('be.visible')
    })

    it('shows the sidebar correctly', () => {
      cy.get('.sidebar-header')

      cy.get('.sidebar-content')
      cy.get('.add-place-btn')
      cy.get('.clear-route-btn')
      cy.get('.reverse-route-btn')
      cy.get('.round-trip-btn')
      cy.get('.route-importer-btn')

      cy.get('.routes-header')
      //  TODO: extend
    })

    it('shows the heightgraph correctly', () => {
      cy.get('.expand-altitude-btn').click()
      cy.get('.heightgraph')
      cy.get('svg.heightgraph-container')
      cy.get('#rightArrowSelection')
      cy.get('#leftArrowSelection')
      cy.get('#selectionText')
      cy.get('.heightgraph-close-icon')
      cy.get('#map-view .leaflet-map-pane svg')
      cy.get('#map-view svg.heightgraph-container g path').should('have.length.gt', 2)
      cy.get('#map-view .leaflet-map-pane svg g path').should('have.length', 2)

      cy.get('#rightArrowSelection').click()
      cy.get('svg.heightgraph-container g path').should('have.length.gt', 2)
      cy.get('.places-and-directions-tab-form .place-inputs .place-input-component').should('have.length', 2)
      cy.get('.legend-hover').should('be.visible')

      cy.get('.legend-hover').trigger('mouseover')
      cy.get('svg.heightgraph-container g.legend')

      cy.get('.heightgraph-close-icon').click()
      cy.get('svg.heightgraph-container').should('not.exist')
    })

    it('shows the route correctly', () => {
      cy.get('.custom-html-icon-div').eq(0).should('have.css', 'background-color', 'rgb(0, 128, 0)')
      cy.get('.custom-html-icon-div').eq(1).should('have.css', 'background-color', 'rgb(255, 0, 0)')
    })
  })

  context('loads round trip from url link', () => {
    it('shows the page setup correctly', () => {
      cy.visit('/#/directions/Heidelberg,BW,Germany/data/%7B"coordinates":"8.769869,49.37625","options":%7B"profile":"foot-walking","options":%7B"round_trip":%7B"length":10000,"points":3,"seed":0%7D%7D,"zoom":18%7D%7D')
      cy.viewport(1848, 980)
      cy.get('#app')
      cy.get('.app-content')
      cy.get('#map-view')
      cy.get('.sidebar')
    })

    it('shows the round trip correctly', () => {
      cy.get('.custom-html-icon-div').eq(0).should('have.css', 'background-color', 'rgb(255, 0, 0)')
      cy.get('.custom-html-icon-div').eq(1).should('not.exist')
    })

    it('shows the sidebar correctly', () => {
      cy.get('.sidebar-header')
      cy.get('.round-trip-btn')
      cy.get('.round-trip-btn .opt-btn i.primary--text').should('have.css', 'color', 'rgb(198, 40, 40)') // TODO: use primary theme color variable
      cy.get('.routes-header')
    })
  })
})
