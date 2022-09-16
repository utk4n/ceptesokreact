import React from "react";
import dataCategories from "../../datas/categories.json";
import logo from "../../assets/brandlogo/soklogo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full bg-primary ">
      <div className="grid grid-cols-4 px-10 py-5 gap-10 bg-primary">
        <div className="ml-1">
          <h3 className="font-bold mb-3">Kategoriler</h3>

          <div className="grid leading-8">
            {dataCategories.map((item, index) => (
              <Link key={index} to={`categories/${item.category_breadcrumb}`}>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto">
          <div>
            <h3 className="font-bold mb-3">Yardım</h3>
          </div>
          <ul className="leading-10">
            <li>Yasal Uyarılar</li>
            <li>Güvenlik Politikası</li>
            <li>Kullanım Koşulları</li>
            <li>Kişisel Verilerin Korunması</li>
            <li>Hakkımızda</li>
            <li>Kurumsal</li>
            <li>Yatırımcı İlişkileri</li>
          </ul>
        </div>
        <div className="mx-auto">
          <div>
            <h3 className="font-bold mb-3">Hesabım</h3>
          </div>
          <ul className="leading-10">
            <li>Siparişlerim</li>
            <li>Kullanıcı Bilgilerim</li>
            <li>Adreslerim</li>
            <li>Favori Ürünlerim</li>
            <li>Ödeme Yöntemlerim</li>
            <li>Fatura Bilgilerim</li>
            <li>Mesaj Gönder</li>
          </ul>
        </div>
        <div className="mx-auto">
          <div>
            <img className="w-16 mb-3" src={logo} alt="" />
          </div>
          <p className="font-bold">Mobil Uygulamamız ile</p>
          <p className="font-bold mb-3">Şok Her an Yanınızda</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAhCAMAAAAPi25wAAABMlBMVEUXFxcAAAAKCgoICAgAAACmpqbY2NgREREnJydVVVUHBwcLCwsDAwMTExM3NzcAAAA2NjZiYmKbm5sAAAD///8CAgIHBwcFBQUUFBQPDw8LCwuhoaF+fn7n5+fIyMjFxcVVVVX09PTr6+umpqaCgoJhYWEwMDAqKiq2traZmZmRkZFoaGhNTU0zMzMgICAZGRnx8fHT09O5ubmysrKNjY1RUVEmJiYkJCQdHR3W1tbOzs7KysrCwsK8vLyWlpaHh4eFhYVzc3NsbGxcXFxAQEA5OTk2NjYtLS36+vr39/fh4eHQ0NC+vr6qqqobGxvt7e23t7etra2cnJx5eXljY2NFRUU9PT39/f3a2tpvb29YWFjd3d2/v79ISEhHR0dCQkLk5OTj4+OJiYlubm5lZWVJSUkFQBxVAAAAE3RSTlP47u/4ADgH5b2E+/X03qjxvHdSIqVsjgAAA0pJREFUSMe91Adv2kAAhmE3Jemen/fCeLL33nvThJnRJun8/3+hTiMITqkaidavZCTOhx589pnweA6fvnzkQm+ePDvyEJ73T+BSzOsj4vAA7vWMeErBvV4RL2i413PiYBdn6Tn8h6jHO7lmnIzAzh0uTJKJhywxz+wepu3DZB7KMV6SVOAo6GdxP1YoFjOgfvt5tGQBHV/2oVzUJ7XgKK+SGdxPK14ZEUycJxigNQJg3nDU3zg6PA/lmJUZ1sXl1uTvcmACqm5MPl1i0Qx6m7ArCADmZOIcRjIZxrVYE/E1GeDTGU6oBKR8J1XRqVgtVA5wf+C6JZIkfVrtjLQb3y2Hv9GROJzFF5rvQ5qsz8kLABd97yWujoW2MjDEvqmQ43b6JFKZ0fAXjE+DfES5VI1Y39uMp3dzWZXczr+5S2q60f+BQhq0utBlm0/BrjPtG/h4Aa8AJNLhOEdJqXRZQnTQtu9dFM2qVGOPV5hVdnMph5bYbL3MQBOkAAoiMGzqSUCzj5uqCWrYQiIIeKvhzwx7LIhiC9bARCQeFeSMXGelLoInO7nsYFvrt+/+RhKYq1xxlAuRluhbdX3nAC66vdKU+hLkdDW3PF0qxxzKU45lwQ8nUe3UGoox6SsbXyEw3skp5HalzaPClVqAdWaORwXpG2ofvcczHqA0VfVH0fDVae3LUIQic8iNPw9DwPVHSajkv6tev8gWI9CFnVzIwU2xmcTDjqYKIsfCXho6fzsc+wC7DxyQt8cZ+tc3lgLA58EAMc7+tEcZ5gFcGfdL1GEXrPyjl1jYwcWzd7NY3GTdXk32H3FZn8NLbU7ka+vl4FkwsGOY/TlGJh0lLdyWC6zntGbsJAZAD+3PoeHkNu9Js8j3liEebLMqMBm6d93tmFxnsdqTi0nOrbBesZ4XJ5/KQSYllKpcktcKV7XznjQ7s/bjcL6tnf7AHVdZRuSeDEXgxvzEQLBhluFV9uSoky2uinWREeRwexRLtAWNlXn/AoF5pIjRvhxisr0D/IHyqf1g8lgXrUM0rTpa06rBi3SjDSMc1aF39+XAhb7lAHQbCoP92825ls29cJN7Tjxh4F4HxDsK7vWWOHoN13p5SHiOnr0iXOng6aHnJ0eLRxbApYRUAAAAAElFTkSuQmCC"
            alt=""
          />
          <img
            className="mt-3"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
