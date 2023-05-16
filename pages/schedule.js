import React from "react";
import Page from "../components/Page";
import { css } from "@emotion/core";
import Link from "next/link";

const Event = ({ time, speaker, speakers, title, url }) => {
  const hasSpeaker = !!speaker || !!speakers;
  const needsSeparator = hasSpeaker && !!title;
  return (
    <tr>
      <th>{time}</th>
      <td>
        {speaker && (
          <strong>{url ? <Link href={url}>{speaker}</Link> : speaker}</strong>
        )}
        {speakers &&
          speakers
            .map((speaker) => (
              <strong>
                <Link href={speaker.url}>{speaker.speaker}</Link>
              </strong>
            ))
            .reduce((jsx, speaker) => (
              <>
                {jsx} and {speaker}
              </>
            ))}
        {needsSeparator && ":"} {title && <span>{title}</span>}
      </td>
    </tr>
  );
};

export function Schedule() {
  return (
    <table
      css={css`
        th,
        td {
          vertical-align: top;
        }
        th {
          white-space: pre;
          font-weight: normal;
          color: rgba(0, 0, 0, 0.5);
          font-family: "OdudoMono-Regular", monospace;
        }
        thead th {
          color: #772858;
          font-size: 20px;
          font-family: "OdudoMono-Regular", sans-serif;
          border-bottom: 1px solid currentColor;
          text-align: center;
          padding-top: 1em;
        }
        thead th a {
          opacity: 0;
          position: absolute;
        }
        thead th:hover a {
          opacity: 1;
        }
        thead th a:focus {
          opacity: 1;
        }
      `}
    >
      <thead>
        <tr>
          <th colspan="2">
            <a href="#day-1" id="day-1">
              #
            </a>{" "}
            Friday, May 19th
          </th>
        </tr>
      </thead>
      <tbody>
        {day1.map((event, index) => (
          <Event {...event} key={index} />
        ))}
        <tr>
          <th>{" 6:00 -  9:00"}</th>
          <td>
            <a href="https://www.google.com/maps/place/Moxy+Chattanooga+Downtown/@35.0399322,-85.3071289,17z/data=!4m20!1m10!3m9!1s0x88605fe8761cce13:0xca45ed9b3732da0b!2sMoxy+Chattanooga+Downtown!5m2!4m1!1i2!8m2!3d35.0399322!4d-85.3071289!16s%2Fg%2F11f5488nmn!3m8!1s0x88605fe8761cce13:0xca45ed9b3732da0b!5m2!4m1!1i2!8m2!3d35.0399322!4d-85.3071289!16s%2Fg%2F11f5488nmn">
              Dinner - The Moxy
              <br />
              1220 King St Chattanooga, TN 37403
            </a>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th
            colspan="2"
            style={{
              paddingTop: "3rem",
            }}
          >
            <a href="#day-2" id="day-2">
              #
            </a>{" "}
            Saturday, May 20th
          </th>
        </tr>
      </thead>
      <tbody>
        {day2.map((event, index) => (
          <Event {...event} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default function SchedulePage() {
  return (
    <Page title="Schedule">
      <h1>Schedule</h1>
      <Schedule />
    </Page>
  );
}

const day1 = [
  {
    time: " 8:00 -  8:45",
    title: "Breakfast and Registration",
  },
  {
    time: " 8:45 -  9:00",
    title: "Announcements",
  },
  {
    time: " 9:00 -  9:45",
    duration: 45,
    speaker: "Randall Thomas",
    url: "/randall-thomas",
  },
  {
    time: " 9:50 - 10:20",
    speaker: "Amos King",
    title:
      "The Importance of Shepherding - Understanding Your Project in the Wild",
    url: "/amos-king",
  },
  { time: "10:20 - 10:50", title: "Break" },
  {
    time: "10:50 - 11:20",
    speaker: "Ben Wheat",
    title: "Failure is the Only Option",
    url: "/ben-wheat",
  },
  {
    time: "11:20 - 11:30",
    title: "Platinum Sponsor Talk - Launch Scout",
  },
  {
    time: "11:30 - 12:00",
    speaker: "Andrew Ek",
    title: "Better Forms with LiveView",
    url: "/andrew-ek",
  },
  {
    time: "12:00 - 12:30",
    speaker: "Steve Bussey",
    title: "Make Elixir Libraries Work for You: Innovate Through Risk",
    url: "/steve-bussey",
  },
  {
    time: "12:30 -  1:40",
    title: "Lunch",
  },
  {
    time: " 1:40 -  2:10 ",
    speaker: "Frank Hunleth",
    title: "Nerves Update",
    url: "/frank-hunleth",
  },
  {
    time: " 2:15 -  2:45",
    speaker: "Kimberly Erni",
    title: "From Self-Taught to First Job",
    url: "/kimberly-erni",
  },
  { time: " 2:45 -  2:50", title: "Platinum Sponsor talk - Groxio" },
  {
    time: " 2:50 -  3:35",
    speaker: "Elixir Chatt Panel -  Frank, Alexa, Bruce",
    title: "A Great Loop PCB Adventure",
  },
  { time: " 3:35 -  4:00", title: "Break" },
  { time: " 4:00 -  4:30", speaker: "Chris Keathley", url: "/chris-keathley" },
  {
    time: " 4:30 -  5:00",
    speaker: "Zach Daniel",
    title: "Domain Modeling, Elevated",
    url: "/zach-daniel",
  },
];

const day2 = [
  {
    time: " 8:00 -  8:45",
    title: "Breakfast",
  },
  {
    time: " 8:45 -  9:00",
    title: "Announcements",
  },
  {
    time: " 9:00 -  9:45",
    duration: 45,
    speaker: "Bryan Hunter",
    url: "/bryan-hunter",
  },
  {
    time: " 9:50 - 10:20",
    speaker: "Joshua Plicque",
    title: "Geoencoding in Elixir",
    url: "/joshua-plicque",
  },
  { time: "10:20 - 10:50", title: "Break" },
  {
    time: "10:50 - 11:20",
    speaker: "Eric Oestrich",
    title: "I know you know Phoenix, but do you know Aino?",
    url: "/eric-oestrich",
  },
  {
    time: "11:20 - 11:30",
    title: "Platinum Sponsor Talk - Adobe",
  },
  {
    time: "11:30 - 12:00",
    speakers: [
      { speaker: "Greg Mefford", url: "/greg-mefford" },
      { speaker: "Matt Enlow", url: "/matt-enlow" },
    ],
    title: "Styler: An Elixir Style-Guide Enforcer",
  },
  {
    time: "12:00 - 12:30",
    speaker: "Sigu Magwa",
    title: "Observability in Elixir Applications",
    url: "/sigu-magwa",
  },
  {
    time: "12:30 -  1:40",
    title: "Lunch",
  },
  {
    time: " 1:40 -  2:10 ",
    title: "Lightning Talks",
  },
  {
    time: " 2:15 -  2:45",
    speaker: "Jeffrey Matthias",
    url: "/jeffrey-matthias",
  },
  { time: " 2:45 -  3:00", title: "Break" },
  {
    time: " 3:00 -  3:30",
    speaker: "Scott Southworth",
    url: "/scott-southworth",
  },
  { time: " 3:45 -  4:30", speaker: "Bruce Tate", url: "/bruce-tate" },
  { time: "         4:30", title: "Wrap!" },
];
