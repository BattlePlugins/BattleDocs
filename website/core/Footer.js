/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="44"
                height="44"
              />
            )}
          </a>
          <div align="left">
            <h5>Organization Info:</h5>
            <a href="https://battleplugins.org/"><img src="https://battleplugins.org/img/favicon.ico" alt="Icon" height="17"/> BattlePlugins Site</a>
            <a href="https://discord.gg/tMVPVJf"><img src="https://battleplugins.org/img/discord.ico" alt="Icon" height="17"/>  Discord Server</a>
            <a href="https://github.org/BattlePlugins"><img src="https://battleplugins.org/img/night.ico" alt="Icon" height="17"/> Github Repos</a>
            <a href="https://ci.battleplugins.org/"><img src="https://battleplugins.org/img/jenkins.ico" alt="Icon" height="17"/> Jenkins CI</a>
            <a href="https://repo.battleplugins.org/"><img src="https://battleplugins.org/img/repo.ico" alt="Icon" height="17"/> Public Repo</a>
          </div>
          <div align="left">
            <h5>Docs Quick Start:</h5>
            <a href="https://docs.battleplugins.org/docs/"><i class="fas icon-white fa-desktop"/> Docs Home</a>
            <a href="https://docs.battleplugins.org/docs/ba"><i class="fas icon-white fa-border-style"/> BattleArena Docs</a>
            <a href="https://docs.battleplugins.org/docs/bt"><i class="fas icon-white fa-chart-area"/> BattleTracker Docs</a>
            <a href="https://docs.battleplugins.org/docs/vp"><i class="fas icon-white fa-user-friends"/> VirtualPlayer Docs</a>
            <a href="https://wiki.battleplugins.org/"><i class="fas icon-white fa-scroll"/> Legacy Wiki</a>
          </div>
          <div align="left">
            <h5>Site Stats:</h5>
            <a href="https://battleplugins.org" className="footer-badge"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/battleplugins/battledocs.svg?color=brightgreen&label=Watching%20Repo%3A&logo=github&logoColor=white&style=flat-square"/></a>
            <a href="https://battleplugins.org" className="footer-badge"><img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/battleplugins/battledocs.svg?color=brightgreen&label=Site%20Size&logo=github&logoColor=white&style=flat-square"/></a>
            <a href="https://battleplugins.org" className="footer-badge"><img alt="Most Recent Commit" src="https://img.shields.io/github/last-commit/battleplugins/battledocs.svg?label=Last%20Update&logo=github&logoColor=white&style=flat-square"/></a>
            <a href="https://battleplugins.org" className="footer-badge"><img alt="Jenkins Builds" src="https://img.shields.io/jenkins/build/https/ci.battleplugins.org/job/BattlePlugins/job/battledocs/job/master.svg?label=Build%20Status&logo=jenkins&logoColor=white&style=flat-square"/></a>
            <a href="https://battleplugins.org" className="footer-badge"><img alt="Discord Server" src="https://img.shields.io/discord/305170628468801537.svg?color=brightgreen&label=Discord%20Server&logo=discord&logoColor=white&style=flat-square"/></a>
          </div>
        </section>
		<div>
			<center>
        <a href="https://github.com/BattlePlugins/battledocs" className="footer-social"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/battleplugins/battledocs.svg?style=social"/><a/> | <a href="https://github.com/BattlePlugins/battledocs" className="footer-social"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/battleplugins/battledocs.svg?label=Watch&style=social"/></a>
        <br></br>
			     <h5 className="footer-slogan">Hosted By:</h5>
           <a href="https://cl6web.com" className="footer-slogan"><img src={`${this.props.config.baseUrl}img/cl6.png`} alt="CL6 Hosting" height="60"/></a>
      </center>
    </div>
    <section className="copyright">{this.props.config.copyright}</section>
  </footer>
    );
  }
}

module.exports = Footer;
