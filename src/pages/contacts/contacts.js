import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import ReactModal from 'react-modal';
import Breadcrumb from '../../component/breadcrumb';
import './contacts.scss';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.reCAPTCHA_bool = false;
    this.aa = false;
    this.state = {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      showModal: false,
    };
  }

  onChangeRecaptcha(value) {
    // console.log('Captcha value:', value);
    this.reCAPTCHA_bool = !!value;
  }

  onChangeField({ target: { name, value } }) {
    let textValue = value;
    if (name === 'phone') {
      // 限制只能輸入數字
      textValue = value.replace(/[^\d]/g, '');
    }
    this.setState({ [name]: textValue });
  }

  onSelectField({ target: { name, value } }) {
    this.setState({ topic: value });
  }

  onSubmitHandle(event) {
    if (this.reCAPTCHA_bool) {
      this.handleOpenModal();
    }
    else{
      alert("請勾選我不是機器人認證")
    }
    event.preventDefault();
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      name, email, phone, message, showModal,
    } = this.state;

    return (
      <div className="pagcontainer" id="page-contacts">
        <Breadcrumb routerData={this.props} />
        <div className="page-content">
          <div className="contacts-info-container">
            <div className="company-address">
              <h2>五倍紅寶石股份有限公司</h2>
              <p>10046 台北市中正區衡陽路 7 號 5 樓</p>
            </div>
            <ul className="contacts-info">
              <li>Tel：02-2331-5247</li>
              <li>Fax：02-2331-8717</li>
              <li>Mobile：0928-617-687</li>
              <li>統編：24536806</li>
              <li>
                E-mail：
                <a href="mailto:hi@5xruby.tw" className="sharp-red"> hi@5xruby.tw</a>
              </li>
            </ul>
            <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.01429731859!2d121.5137072!3d25.0424356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-zIC0g57ay6aCB6Kit6KiI5pWZ5a2456iL5byP6Kit6KiI5pWZ6IKy5qmf5qeL!5e0!3m2!1szh-TW!2stw!4v1580739457856!5m2!1szh-TW!2stw" width="100%" height="450" frameBorder="0" style={{ border: '0' }} allowFullScreen="" />
          </div>
          <div className="contacts-form">
            <p>任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！</p>
            <form onSubmit={(event) => this.onSubmitHandle(event)}>
              <input
                type="text"
                name="name"
                placeholder="名字"
                value={name}
                required
                autoComplete="off"
                onChange={(event) => this.onChangeField(event)}
              />
              <input
                type="email"
                name="email"
                placeholder="信箱"
                value={email}
                required
                autoComplete="off"
                onChange={(event) => this.onChangeField(event)}
              />
              <input
                type="text"
                name="phone"
                placeholder="電話"
                value={phone}
                required
                autoComplete="off"
                onChange={(event) => this.onChangeField(event)}
              />
              <select
                required
                onChange={(event) => this.onSelectField(event)}
              >
                <option value="">請選擇主題</option>
                <option value="專案開發">專案開發</option>
                <option value="技術諮詢">技術諮詢</option>
                <option value="企業內訓">企業內訓</option>
                <option value="課程詢問">課程詢問</option>
                <option value="其他">其他</option>
              </select>
              <textarea
                name="message"
                placeholder="留下你的訊息"
                rows="5"
                required
                value={message}
                onChange={(event) => this.onChangeField(event)}
              />
              <div className="reCAPTCHA-container">
                <ReCAPTCHA
                  sitekey="6Lc4VtUUAAAAAHIcTo7HU9KQQSDM-5yDRlYFrooZ"
                  onChange={(value) => this.onChangeRecaptcha(value)}
                />
              </div>
              <input type="submit" value="送出" />
              <ReactModal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={() => this.handleOpenModal()}
                className="react-modal-box"
                overlayClassName="Overlay"
                ariaHideApp={false}
              >
                <p>以下是您所填寫的資料：</p>
                <ul>
                  <li>
                    名字：
                    {name}
                  </li>
                  <li>
                    信箱：
                    {email}
                  </li>
                  <li>
                    電話：
                    {phone}
                  </li>
                  <li>
                    選擇主題：
                    {message}
                  </li>
                  <li>
                    您的留言：
                    {message}
                  </li>
                </ul>
                <button type="button" onClick={() => this.handleCloseModal()}>關閉視窗</button>
              </ReactModal>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
