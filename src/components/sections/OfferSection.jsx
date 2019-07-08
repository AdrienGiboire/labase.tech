import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import { ButtonPrimary } from '../Button';

const SectionTitleCustom = styled(SectionTitle)`
  margin-bottom: 30px !important;
`;

const SectionSubTitleCustom = styled(SectionSubTitle)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;
`;

const OfferColumn = styled.div`
  padding: 30px;
  background: ${props => props.theme.color2};
  color: ${props => props.theme.color4};

  ul {
    margin-bottom: 30px;
  }
`;

const OfferPrice = styled.div`
  display: inline-block;
  border-top: 5px solid ${props => props.theme.color4};
  padding-top: 30px;
  font-weight: 600;
  font-size: 0.9em;

  @media (min-width: ${props => props.theme.breakpointTablet}) {
    padding: 30px 50px 0 0;
    font-size: 1em;
  }
`;

const SkillsColumn = styled.div`
  padding: 30px;

  ul {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  li {
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.color4};
    text-transform: uppercase;
    display: inline-block;
    margin-top: 20px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 0.7em;
    color: ${props => props.theme.color4};
    cursor: default;

    @media (min-width: ${props => props.theme.breakpointTablet}) {
      font-size: 1em;
    }
  }
`;

const OfferSection = () => (
  <Section id="section-offer">
    <div className="container">
      <SectionTitleCustom className="title section-title has-text-centered-mobile">
        <span className="is-hidden-mobile">Notre offre</span>
        <span className="is-hidden-tablet">Offre</span>
      </SectionTitleCustom>

      <div className="columns">
        <OfferColumn className="column">
          <SectionSubTitleCustom>Pour chaque projet</SectionSubTitleCustom>

          <ul className="is-hidden-mobile">
            <li>
              + Aide à la définition des besoins & de <b>votre roadmap</b>
            </li>
            <li>
              + <b>Suivi de votre projet</b> sur le long-terme
            </li>
            <li>
              + <b>Encadrement</b> de vos bénévoles aux compétences numériques
            </li>
            <li>
              + Accès à <b>notre communauté</b> de bénévoles
            </li>
            <li>
              + <b>8 jours</b> homme adaptés à vos besoins
            </li>
          </ul>

          <ul className="is-hidden-tablet">
            <li>
              + Définition des besoins & <b>roadmap</b>
            </li>
            <li>
              + <b>Encadrement</b> de vos bénévoles aux compétences numériques &
              accès à notre communauté
            </li>
            <li>
              + <b>8 jours</b> homme adaptés à vos besoins
            </li>
          </ul>

          <OfferPrice>à partir de 2,000€ HT/mois</OfferPrice>
        </OfferColumn>
        <SkillsColumn className="column">
          <h2>Accompagnement</h2>

          <p>
            Nous couvrons <b>les besoins numériques</b> des acteurs engagés pour
            le climat au travers d’un abonnement mensuel.
            <br />
            <br />
            Nous couvrons les champs d&apos;expertises suivantes :
          </p>

          <ul>
            <li>Développement</li>
            <li>UX Design</li>
            <li>Automatisation</li>
            <li>Sécurité</li>
            <li>Data</li>
          </ul>

          <ButtonPrimary>Nous contacter</ButtonPrimary>
        </SkillsColumn>
      </div>
    </div>
  </Section>
);

export default OfferSection;
