import React from "react";

function PreSale() {
  return (
    <div className="pre-sale">
      <h1>PRE-SALE</h1>
      <div className="pre-sale_container">
        <input type="number" placeholder="Enter USDT BEP-20" id="usdt" />
        <span className="currency_button">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgBrVRLSFRRGP7+M1dHRzF8pblRfJdB9IAWQRDRY2nlIhc+oMiVUJui0hrCFq2MaFMY+SCjheYuKpAKjchSkAoby8fMmDKjM0zTPO/MOR1HZrwOPhL7Lpf7n/P/5zvf+f/zX8IaKO5o3ssEKsHECUDsFAKpJGABow9MYS+C7kDfRMMdV/w6ip8ofWDMEnq1mwjHsA4EkZnA7ppqb7WuSbirvbkiRPy1NHfgHyGV3xuva7kIkvq1hOVPjQU8qA5JMwubhGDUMV7TUq8lpNKuGybwcPHiQK9LwIGc/HVJnH4vvjl+aVjRaKq/fT9CWNbZdE4I0Rb1FaRl4mXlpXUJ31pNuNDfGRsTaM6T7ClUlsjRqA3mXMAZ8MbG6XpD5OsPqfCF1Ygd/S4LFLnJHkMdlT0y5glFnYlXIBXH7E/VzUhLTMLVwR70/BheVkXxl4Q/UzgLVpCm2Iv2tqRk5KdmwOH3IMBDMZ8hQY8cQxpy5etWA5h2O8AFX+Yj3UHGmC5Hu8eZkn2oSM/D6LwVlj9O2LzumM8bCsLmc2N0YQYTLjsu7z8Jhem05waVdF2vJo7u6FyKkohDeSXISEqJECiMoTAtG1w+roAPv4N+eKS6rORUDNss+LJg1cihKYVCfARyURQeSfLK/HVFZobONi3l8H0vejU5jIcUOMvcQb2ZGDnxH8AI/Wy2wegVXDzBliHLmaC0Rc7qATfKG+DGFiDXt49VG6ciJXL3Dfiyq46qgvPjqwXriGHEbsbHuUnYfavtK4sBtc7eN+hacTPLu5qMsktuYjPKBKZl8o58r22ZjGyudc4/f/cm89Rh2VO0Rw4NG5IRDTCFqsZqWn7G5lYLLH9sLAjr1CsyzadlD26PI5E/VwxQGN2pAVvb54aHK5qasAGKOq/tVoRSRDyUzhNg8fp9I9bzrY614v8CI3wTEwm5NpUAAAAASUVORK5CYII="
            alt=""
          />
          USDT
        </span>

        <br />
        <span>
          <img
            className="arrow"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACJSURBVHgB7ZJbDYAwDEUblCAFCThACrWAAkABEpAADpBS2tAlY6F7hPDHTZpmS8/ZxwpghIhqrlE6lIYhpCtozVTwIj9cCut/tiUQzzfCycuLFB/6TLDjtnJtAs96jymBgpMeB3fptomcINwwAb0ZDK03gQ9HQUNwaN+ToCGgbDAiyAMfBAhf5ASqFeFalQIKhAAAAABJRU5ErkJggg=="
            alt=""
          />
        </span>
        <br />

        <span>
          <input type="number" placeholder="SilverLine Amount" disabled />
          <span className="currency_button">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgBtZLfS1NhGMef9+ycM487c02PtbllnkrTJNRK2gKlq5AQuim7COoqL7rpJugiiVN/QBdBgRCE4I1JGZRYJCIoFZJK05aozTy6tqmTbWfnbDs/c4FiaTov+l49L3zfz/N9Hh4Ee1Br+2eiyPepwJLeR6PMsqyMxaOcn5M3e9BukFuXO0rL7Gamv5aeo4H2xEZC1x1TS2fYfF2gzrEP2HtyTwu0aOt+fCeY1/2Q0nB4Kft4J1FZ82p4OHiBTWRKKMJEkFEBCvnEJbd3vBc+QionoONa3ZEPL76UeVna/j2s3EgaYArMxDECZNApzKBwXF/868+fQGOpAQAjISiswNOOiXlVc0dYhhry7MdWMYRJLhrUUAoCYQGQqoGDJN7HzTZle6BhmACigbWqCqwU5ehhqqQ2RlftpOkrQwBmJQACOGiiCiKBDKXYPGJJht/dGeS0fyXUAX4sQaKUAptjtoF7Tk5fPDSoTEYRrLVSDR1MZvz3qFYXHT5fnt/GviEj2SibgdhGhZAB6LTibeoMZp/dXIssEVivUmMnbS4rFFnywEmRUEyQUO8yD8WmQj/91f4tV7Lj2Vwx0hUDsuBLLYpmLCaDNBoB01AECufiuseJ+2os6C6Ir/u57m55a8Jt1IXypk8E0reTb3kg+4OALYiAQiJgfAJTJldqpYVEewnd3MgBh+UEzGqg0v24IiR3rT77BiwvAb6SAgZUKEqloUDOuGIEanOegrx1P74bMLvbR/H4zScTkVpyfP4YXncw4/KrZGEsgw4QaxubXS4LVh7FYTTHhFk12WyrJ5uYxrOH88eaNTGwYC8Y5qvc/JRgzEhWuhPKryY3+sMe1GoYhOd+X3nf8eRsNVXtsC6LhsDXBzkO6fC/9Av01gixzaoa4wAAAABJRU5ErkJggg=="
              alt=""
            />
            SLN
          </span>
        </span>
        <p className="min_amt">*min amount=10USDT</p>
        <button className="buy_btn">BUY SLN</button>
      </div>
    </div>
  );
}

export default PreSale;
