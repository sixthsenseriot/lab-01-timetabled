import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 AM</td>
                    <Event
                        event={"Science Museum 🧪"}
                        color={"blue"}
                        location={"5555 Hermann Park Dr"}
                    />
                    <Event
                        event={"Space Center 🛰️"}
                        color={"blue"}
                        location={"1601 E NASA Pkwy"}
                    />
                    <td></td>
                    <Event
                        event={"Funeral Museum ⚰️"}
                        color={"blue"}
                        location={"415 Barren Springs Dr"}
                    />
                    <td></td>
                    <td></td>
                    <Event
                        event={"Farmers Market 🧑‍🌾"}
                        color={"yellow"}
                        location={"2520 Airline Dr"}
                    />
                </tr>
                <tr>
                    <td className="time">9 AM</td>
                    <td></td>
                    <td></td>
                    <Event
                        event={"Menil Collection 🫖"}
                        color={"blue"}
                        location={"1533 Sul Ross St"}
                    />
                    <td></td>
                    <Event
                        event={"Theater District 🎭"}
                        color={"blue"}
                        location={"615 Louisiana St"}
                    />
                    <Event
                        event={"Houston Zoo 🦓"}
                        color={"blue"}
                        location={"6200 Hermann Park Dr"}
                    />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10 AM</td>
                    <Event
                        event={"Hermann Park 🌳"}
                        color={"green"}
                        location={"6001 Fannin St"}
                    />
                    <td></td>
                    <td></td>
                    <Event
                        event={"Art Car Museum 🚗"}
                        color={"blue"}
                        location={"140 Heights Blvd"}
                    />
                    <Event
                        event={"Alley Theatre 🤹"}
                        color={"blue"}
                        location={"615 Texas Ave"}
                    />
                    <td></td>
                    <Event
                        event={"Heights Mercantile 🛒"}
                        color={"yellow"}
                        location={"714 Yale St"}
                    />
                </tr>
                <tr>
                    <td className="time">11 AM</td>
                    <td></td>
                    <Event
                        event={"Seabrook Waffle 🧇"}
                        color={"pink"}
                        location={"1402 5th St"}
                    />
                    <Event
                        event={"Photo Center 📸"}
                        color={"blue"}
                        location={"1441 W Alabama St"}
                    />
                    <td></td>
                    <td></td>
                    <Event
                        event={"Pinewood Cafe ☕"}
                        color={"pink"}
                        location={"6104 Hermann Park Dr"}
                    />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 PM</td>
                    <Event
                        event={"Raven Grill 🍖"}
                        color={"pink"}
                        location={"1916 Bissonnet St"}
                    />
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event
                        event={"Brennan's 🍲"}
                        color={"pink"}
                        location={"3300 Smith St"}
                    />
                    <td></td>
                    <Event
                        event={"Eight Row Flint 🌮"}
                        color={"pink"}
                        location={"1039 Yale St"}
                    />
                </tr>
                <tr>
                    <td className="time">1 PM</td>
                    <td></td>
                    <td></td>
                    <Event
                        event={"Lucille's 🥘"}
                        color={"pink"}
                        location={"5512 La Branch St"}
                    />
                    <Event
                        event={"The Hobbit Cafe 🍔"}
                        color={"pink"}
                        location={"2243 Richmond Ave"}
                    />
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 PM</td>
                    <Event
                        event={"Art Museum 🖼️"}
                        color={"blue"}
                        location={"1001 Bissonnet St"}
                    />
                    <Event
                        event={"Kemah Boardwalk 🎡"}
                        color={"blue"}
                        location={"215 Kipp Ave"}
                    />
                    <td></td>
                    <Event
                        event={"Smither Park 🪨"}
                        color={"green"}
                        location={"2441 Munger St"}
                    />
                    <td></td>
                    <Event
                        event={"McGovern Lake 🦆"}
                        color={"green"}
                        location={"6201 Hermann Park Dr"}
                    />
                    <Event
                        event={"Contemporary Art 🗿"}
                        color={"blue"}
                        location={"5216 Montrose Blvd"}
                    />
                </tr>
                <tr>
                    <td className="time">3 PM</td>
                    <td></td>
                    <td></td>
                    <Event
                        event={"Soldiers Museum 🪖"}
                        color={"blue"}
                        location={"3816 Caroline St"}
                    />
                    <td></td>
                    <Event
                        event={"Wortham Center 🩰"}
                        color={"blue"}
                        location={"501 Texas Ave"}
                    />
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event
                        event={"Discovery Green ⛲"}
                        color={"green"}
                        location={"1500 McKinney St"}
                    />
                    <td></td>
                    <Event
                        event={"Centennial Park 🪴"}
                        color={"green"}
                        location={"1500 Hermann Dr"}
                    />
                    <Event
                        event={"Bayou Park 🏙️"}
                        color={"green"}
                        location={"105 Sabine St"}
                    />
                </tr>
                <tr>
                    <td className="time">5 PM</td>
                    <Event
                        event={"Walk at Rice 🚶"}
                        color={"green"}
                        location={"6100 Main St"}
                    />
                    <td></td>
                    <Event
                        event={"Midtown Park 🥏"}
                        color={"green"}
                        location={"2811 Travis St"}
                    />
                    <td></td>
                    <Event
                        event={"Market Square 🛍️"}
                        color={"yellow"}
                        location={"301 Milam St"}
                    />
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Calendar;
