import React from 'react';
import Nav3 from '@/Home/Nav3';
import Footer0 from '@/Home/Footer0';
import { Nav30DataSource, Footer00DataSource } from '@/Home/data.source';
import { enquireScreen } from 'enquire-js';
import './About.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div className="about-page">
        <Nav3
          id="Nav3_0"
          key="Nav3_0"
          dataSource={Nav30DataSource}
          isMobile={this.state.isMobile}
        />
        
        <div className="about-container">
          <h1>关于我们</h1>
          
          <div className="company-intro">
            <div className="text-content">
              <h2>宿州科锐电器有限公司</h2>
              <p>公司成立于2008年，是集生产、销售和研发于一体的专业从事煤矿电器的企业。</p>
              <p>公司依托自身强大的生产研发能力，可以快速地为客户研发定制化产品，应对市场竞争。</p>
              <p>宿州科锐电器有限公司致力于为客户提供安全的矿用电器以及智能化解决方案。</p>
            </div>
            <div className="company-features">
              <h3>我们的优势</h3>
              <ul>
                <li>
                  <span className="feature-title">专业研发</span>
                  <p>拥有强大的研发团队，可快速响应客户需求</p>
                </li>
                <li>
                  <span className="feature-title">品质保证</span>
                  <p>严格的质量管控体系，确保产品稳定可靠</p>
                </li>
                <li>
                  <span className="feature-title">服务至上</span>
                  <p>提供完善的技术支持和售后服务</p>
                </li>
                <li>
                  <span className="feature-title">创新驱动</span>
                  <p>持续创新，推动矿用电器智能化发展</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer0
          id="Footer0_0"
          key="Footer0_0"
          dataSource={Footer00DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
} 