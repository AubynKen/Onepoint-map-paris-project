import React from "react";
import TreeLeaves from "../images/tree-leaves.png";

const BackgroundScreen = () => {
  return (
    <div>
      <img src={TreeLeaves} style={{ width: "20rem" }} alt="tree-leaves" />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div id="scientific-background-text" style={{marginBottom: "3rem"}}>
          <h1>Scientific Background</h1>
          <p>
            Urban vegetation, particularly trees, provides numerous benefits
            that can improve environmental quality and human health in and
            around urban areas. These benefits include improvements in air and
            water quality, building energy conservation, cooler air temperatures
            and many other environmental and social benefits (Nowak et al.
            2007). In our case the fact that trees can remove sulphur dioxide
            (SO2), particulate matter (PM10) and ozone (O3) as studies have
            quantified and proven, is particularly interesting. It may seem
            natural for the trees to sequester CO2 and other gases, but trees as
            such have limits. There are variations in the extent of remediation
            between different tree species. Hence, we were keen to find out
            whether there might be a tree species that is best suited for a
            dense city, like Paris, and converts greenhouse gases the most or
            most efficiently. However, as studies have shown, the concept of
            prioritizing tree species for urban planting based on their utility
            can be misleading. Site-specificity is the most important factor
            here, as the net annual oxygen production of a tree for instance is
            highly dependent on its size, condition, and growth rate among its
            environment in the city (see Ramanan et al. 2021 & Nowak et al.
            2007). Therefore, local tree species should be the first choice in
            urban tree planting programmes, unless there is a systematic
            evaluation of trees for their utility values like PM2.5 removal or
            oxygen production potential which should be supported
            scientifically. Local tree species in Paris are mostly Linden trees
            or Honey Locust as you can see on our map as well as in the essay
            “Paris Street Trees” (http://www.thesanguineroot.com/?p=1691) that
            also points out the need of more trees in Paris, make sure to give
            it a read.
          </p>
          <h1>Hard facts </h1>

          <p>
            Trees absorb carbon dioxide (CO2), removing and storing the carbon
            while releasing the oxygen back into the air whilst they much more
            importantly clean the air and reduce the negative effects that this
            CO2 could have had on the environment. Nearly 20 pounds of carbon
            dioxide are produced from burning one gallon of non-ethanol
            gasoline. In one year, an acre of mature trees absorbs the amount of
            CO2 produced by a car driven 26,000 miles. That is the equivalent of
            more than 48 pounds of carbon dioxide from the atmosphere and
            release oxygen in exchange.{" "}
          </p>

          <h1>How do trees and quality of urban life correlate? </h1>

          <p>
            Urban forests produce large amounts of oxygen. However, with the
            large and relatively stable amount of oxygen in the atmosphere and
            extensive production by aquatic systems, this tree benefit is
            relatively unremarkable. What is way more significant is that they
            have an enormous impact on atmospheric trace chemicals such as
            carbon dioxide and air pollutants such as ozone, particulate matter,
            sulfur dioxide, nitrogen dioxide, carbon monoxide, and lead. Their
            spread is mitigated by trees - the more, the more effective. And
            that doesn’t only improve human health and environmental quality.
            Mental health and urban biodiversity are closely linked (see
            Marselle et al. 2020). Unintentional daily contact to nature through
            street trees close to the home may reduce the risk of depression,
            especially for individuals in deprived groups. The bottom line here
            is that the effects of urban trees on air pollution can be
            significant. Small changes in air pollution concentrations can have
            considerable impacts on air quality and human health (e.g.,
            Cardelino and Chameides 1990; Taha 1996; Nowak et al. 2000, 2006a).
            Urban forest carbon sequestration and air pollution removal along
            with other environmental impacts of urban forests (e.g., water
            quality improvement, lower air temperatures, reduced ultraviolet
            radiation loads) need to be better incorporated within local and
            regional planning efforts to improve environmental quality and
            enhance the quality of urban life. With this website we aim to shed
            more light on this vital topic.
          </p>
        </div>
        <hr></hr>
        <div id="scientific-background-sources" style={{marginTop:"2rem"}}>
          <h2>Sources</h2>
          <ul>
            <li>
              Marselle, M.R., Bowler, D.E., Watzema, J., Eichenberg, D.,
              Kirsten, T., Bonn, A. (2020): “Urban Street tree biodiversity and
              antidepressant prescriptions”. In: Sci Rep 10, 22445
            </li>
            <li>
              Nowak, D.J. and Crane, D.E. (2007): “Oxygen production by urban
              trees in the United States”. In: Arboriculture & Urban Forestry,
              33 (3), p.220-226.
            </li>
            <li>
              Ramanan, S., Osman, M., Shanker, A.K. and Sridhar, K.B. (2021):
              “Oxygen production potential of trees in urban areas: a reality
              check?”. In: Current Science, Vol. 121 (5), p.622-625.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackgroundScreen;
