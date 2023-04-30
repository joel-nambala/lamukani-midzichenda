const Donate = function () {
  return (
    <div className="container">
      <form className="donations-form">
        <h2 className="donations-head">Donation details</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="donations-title">Donation Amount</td>
              <td>
                <div className="donations-group">
                  <div className="form-group">
                    <input type="radio" id="5.00" name="donate" value="5.00" />
                    <label htmlFor="5">$ 5.00</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="10.00"
                      name="donate"
                      value="10.00"
                    />
                    <label htmlFor="10.00">$ 10.00</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="20.00"
                      name="donate"
                      value="20.00"
                    />
                    <label htmlFor="20.00">$ 20.00</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="50.00"
                      name="donate"
                      value="50.00"
                    />
                    <label htmlFor="50.00">$ 50.00</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="100.00"
                      name="donate"
                      value="100.00"
                    />
                    <label htmlFor="100.00">$ 100.00</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      id="amount"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="donations-title">Payment method</td>
              <td>
                <div className="donations-group-method">
                  <div className="form-group">
                    <input type="radio" id="5.00" name="donate" value="5.00" />
                    <label htmlFor="5">Online payment</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      id="10.00"
                      name="donate"
                      value="10.00"
                    />
                    <label htmlFor="10.00">Offline payment</label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="donations-title">Reccurence</td>
              <td>
                <div className="donations-group-reccur">
                  <div className="form-group-select">
                    <select name="select" id="select">
                      <option value={''} disabled>
                        ---Select reccurence---
                      </option>
                      <option value={'one-time'}>One Time</option>
                      <option value={'weekly'}>Weekly</option>
                      <option value={'monthly'}>Monthly</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="donations-title">Campaigns</td>
              <td>
                <div className="donations-group-reccur">
                  <div className="form-group-select">
                    <select name="select" id="select">
                      <option value={''} disabled>
                        ---Select Campaign---
                      </option>
                      <option value={'against-unemployment'}>
                        Against unemployment
                      </option>
                      <option value={'sponsor-orphans'}>
                        Sponsor an orphan child
                      </option>
                      <option value={'proper-elderly-care'}>
                        Proper elderly care
                      </option>
                      <option value={'special-education-opportunities'}>
                        Special education opportunities
                      </option>
                      <option value={'child-protection-programme'}>
                        Child protection programme
                      </option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="donations-title">Message</td>
              <td>
                <div className="donations-group-1">
                  <label htmlFor="message"></label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your custom text"
                    cols={100}
                    rows={6}
                  ></textarea>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="donations-title">Anonymous donation?</td>
              <td>
                <div className="donations-group-1">
                  <label htmlFor="checkbox"></label>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  Check this box to hide your personal info in our donators list
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Donate;
