import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

const Business = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Business</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">Merchandising</h3>
              <span className="skills__level">Brand1,Brand2,..</span>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">Category Management</h3>
              <span className="skills__level">Brand1,Brand2</span>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">
                Online Channel category management
              </h3>
              <span className="skills__level">Brand1,Brand2</span>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">Sales Development</h3>
              <span className="skills__level">Brand1,Brand2</span>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">
                Wholesale & Distribution Network servicing
              </h3>
              <span className="skills__level">Brand1,Brand2</span>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">Supply Chain Management</h3>
              <span className="skills__level">Brand1,Brand2</span>
            </div>
          </div>

          <div className="skills__data">
            <div>
              <BiBadgeCheck className="check__badge" />
            </div>

            <div>
              <h3 className="skills__name">
                Business Management for EBO's , MBO's , LFS
              </h3>
              <span className="skills__level">Brand1,Brand2,..</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
