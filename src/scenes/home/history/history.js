import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import styles from './history.css';

class History extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <QuoteBanner
          author="Collin Powell"
          quote="There are no secrets to success. It is the result of preparation, hard work, learning from failure."
        />

        <Section theme="white" headingLines={false}>
          <div className={styles.timeline}>
            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2012 </h1>
                <h2> It all starts with a hackathon </h2>
              </div>
              <div className={styles.description}>
                <p> Our founder and retired U.S. Army Captain David Molina attends his first hackathon in New York City.
                  After a weekend learning at <a href="http://angelhack.com" rel="noopener noreferrer" target="_blank">AngelHack</a> he is inspired to pursue software craftsmanship as a post-military occupation. He submits his application to The Flatiron School while on active-duty only to discover that the program does not accept the New GI Bill as payment. </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2013 </h1>
                <h2> One Month Rails </h2>
              </div>
              <div className={styles.description}>
                <p> Molina exits military serve in early 2013 and begins to self-learn Ruby on Rails, a full-stack web
                development platform for building comprehensive web applications attending <a href="http://bmoreonrails.org" rel="noopener noreferrer" target="_blank"> Bmore on Rails</a> meetups and taking
                <a href="http://onemonth.com" rel="noopener noreferrer" target="_blank"> One Month Rails</a> online. </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2013 </h1>
                <h2> The vision becomes clearer </h2>
              </div>
              <div className={styles.description}>
                <p> Molina attends <a href="http://railsconf.com" target="_blank"rel="noopener noreferrer"> RailsConf</a> as a scholarship fellow and is introduced to the Portland ruby group and rubyists from around the world.</p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2013 </h1>
                <h2>Patriot Boot Camp </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Molina is selected and attends <a href="http://techstars.com/patriotbootcamp" target="_blank" rel="noopener noreferrer"> Techstars Patriot Boot Camp (PBC)</a>
            at George Washington University. There he raises the problem to guest speaker and Virginia Senator Tim Kaine of the
            inability of using the New GI Bill to go to code school and prepare for the modern workforce. Before departing D.C.,
            Molina takes an Uber to the U.S. Capitol and meets with U.S. Army Congressional Fellow Ben Culver. Culver recommends
            gathering the following data:
            <ol>
              <li>Number of veterans who are interested in coding as a post-military occupation.</li>
              <li>Assessing the interest among all code schools nationally.</li>
              <li>Determining the overall associated costs with implementing a broad reaching program.</li>
            </ol>
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2013 </h1>
                <h2> First draft </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Molina purchases opcod3.us and begins working on a first draft of this website with fellow Army veteran and software
            developer Don Livanec.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> August 21st, 2014 </h1>
                <h2> Operation Code is a go </h2>
              </div>
              <div className={styles.description}>
                <p>
                  At <a href="http://cascadiarubyconf.com" target="_blank" rel="noopener noreferrer"> Cascadia Ruby </a>, Molina is encouraged by fellow rubyist, Whitney Rose, to launch Operation Code&#39;s petition using Launchrock, and seperate the main application using Ruby on Rails for first iteration.
            After lengthy discussions with Kristin Smith (<a href="https://www.codefellows.org" rel="noopener noreferrer" target="_blank"> Code Fellows</a>) and Adam Enbar (The Flatiron School), the first line of code is
            committed to GitHub on <a href="https://github.com/OperationCode/operationcode" target="_blank" rel="noopener noreferrer"> August 21st, 2014</a>
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2014 </h1>
                <h2> Dr. Davis joins the team </h2>
              </div>
              <div className={styles.description}>
                <p> Louisiana native, Army veteran and software developer Dr. James Davis joins Operation Code and supplies substantial incremental software functionality integrating the petition into the rails application.</p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2014 </h1>
                <h2> Pairing begins </h2>
              </div>
              <div className={styles.description}>
                <p> Molina begins pairing software developers and veterans to get coding faster. The 1-on-1 Software Mentor Protégé Program kicks off with HTML/CSS, JavaScript and Ruby on Rails. Dr. Davis becomes the first mentor and over a dozen veterans sign up to learn to code.</p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2014 </h1>
                <h2> First donor </h2>
              </div>
              <div className={styles.description}>
                <p> Web developer, teacher, entrepreneur and co-founder of <a href="https://www.codefellows.org"> Code Fellows</a>, Ivan Storck, purchases <a href="http://operationcode.org"> operationcode.org</a> for Operation Code. Becomes our first in-kind donor.</p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2014 </h1>
                <h2> DNSimple joins </h2>
              </div>
              <div className={styles.description}>
                <p> <a href="http://dnsimple.com" target="_blank" rel="noopener noreferrer"> DNSimple</a> joins Operation Code as our domain management service provider ensuring this site is operational 24/7.</p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2014 </h1>
                <h2> Sipe contributions </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Army veteran and aspiring software developer, Charles Sipe, contributes guest post - <a href="https://www.switchup.org/blog/why-veterans-will-make-excellent-programmers" target="_blank" rel="noopener noreferrer"> Why veterans will make excellent programs</a> at switchup.org published on Veteran&#39;s Day and goes viral.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> January 19, 2014 </h1>
                <h2> Good and Ramos join the team </h2>
              </div>
              <div className={styles.description}>
                <p>
                  New York City-based HackHands co-founders, Forest Good and Geraldo Ramos, join Operation Code. Good and Ramos design our logo and provide our veterans access to <a href="https://hacksummit.org" target="_blank" rel="noopener noreferrer"> hack.summit()</a> a virtual conference to learn from the world&#39;s most renowned programmers.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Scaling to new heights </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Software developer Chris Hough joins Operation Code and provides software architecture advice that improves application functionality and speed.The open source code is moved from Molina&#39;s personal repo to an <a href="http://github.com/operationcode/operationcode" target="_blank" rel="noopener noreferrer"> organizational repo</a> and half a dozen contributors join the team.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Jay Bloom joins advisory team </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Former President/CEO of United Way of Columbia-Willamette Jay Bloom and former Assistant Secretary of Veterans Affairs John Garcia join the Operation Code advisory team.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> March 5, 2015 </h1>
                <h2> Ruby on Ales </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Bend, Oregon-based, <a href="http://ruby.onales.com" target="_blank" rel="noopener noreferrer"> Ruby on Ales</a> becomes first software developer industry conference to support veterans with ruby programming education. Four scholarships are awarded to two Army vets, one Marine vet, and one Navy vet.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> March 19, 2015 </h1>
                <h2> Teresa Mahoney joins the team </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Columbia Journalism School grad and former Mint reporter Teresa Mahoney joins Operation Code to interview veterans from across the country, and craft our story using video to drive more public awareness.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> New Twitter handle </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Operation Code changes it&#39;s Twitter handle to <a href="http://twitter.com/operation_code" target="_blank" rel="noopener noreferrer"> @operation_code</a> for more effective branding, as well as <a href="http://instagram.com/operation_code" target="_blank" rel="noopener noreferrer"> Instagram</a> and <a href="http://facebook.com/operationcode.org" target="_blank" rel="noopener noreferrer"> Facebook</a>
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> April 24, 2015 </h1>
                <h2> Formal launch </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Formal launch of Operation Code. The <a href="http://calagator.org/events/1250468219" target="_blank" rel="noopener noreferrer"> April 16th launch party</a> brings veteran coders, software developers, media and officials from U.S. Senator Ron Wyden and Congressman Blumenauer&#39;s office.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Slack channels created </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Army veteran and software developer Fernando Paredes joins Operation Code and expands the Software Mentor Protégé Program to Peer-to-Peer mentorship using <a href="https://operation-code.slack.com/" target="_blank" rel="noopener noreferrer"> Slack</a>. Paredes creates the following channels: Android, Ember, Go, HTML/CSS, iOS, Java, JavaScript, PHP, Python, and Ruby. Veterans now have instant access to a veterans coding community and software mentors accessible in the browser, desktop and via native app.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Contributing guide created </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Software developers, Fernando Paredes, Nell Shamrell, and Eric McKenna help make Operation Code more open and developer user-friendly by creating a <a href="https://github.com/OperationCode/operationcode/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer"> contributing guide</a>
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Airbnb sponsors </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Global hospitality provider, <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer"> Airbnb</a> sponsors Operation Code veterans lodging requirements while visiting San Francisco for Signal. HQ tour is <a href="https://www.instagram.com/p/21p5bFxUjd/?taken-by=davidcmolina" target="_blank" rel="noopener noreferrer"> provided</a> and Airbnb becomes official lodging sponsor for veterans doing job interviews going forward.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> May 19, 2015 </h1>
                <h2> SignalConf </h2>
              </div>
              <div className={styles.description}>
                <p>
                  San Francisco-based, <a href="https://www.twilio.com/signal/2015" target="_blank" rel="noopener noreferrer">SignalConf</a> becomes 2nd software developer industry conference to support Operation Code veterans to keep coding and building software. Three scholarships are awarded to two Army vets, and one Navy vet. Operation Code veterans tour Twilio.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> May 21, 2015 </h1>
                <h2> 21st Amendment meetup </h2>
              </div>
              <div className={styles.description}>
                <p>
                  While in San Francisco, Operation Code Founder David Molina hosts a meetup at 21st Amendment that is attended by Elmer Thomas (SendGrid), Laura Gómez (Atipica), Nick Frost (Navy Veteran) and Pete Runyon (Marine Veteran). The following day Pete accompanies David on meetings throughout San Francisco.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Board of directors </h2>
              </div>
              <div className={styles.description}>
                <p>
                  To meet growth demands, Operation Code <a href="https://twitter.com/operation_code/status/614443994769027072" target="_blank" rel="noopener noreferrer"> separates</a> from its fiscal sponsor/agent, The Cogostar Foundation, recruits new founding governing board of directors comprised of Army, Marine, and Navy veterans, an Army spouse, software developers and technology entrepreneurs, to include: Josh Carter, Aimee Knight, Nick Frost, Pete Runyon, Laura Gómez, Fernando Paredes, and Elmer Thomas. Operation Code incorporates as an Oregon nonprofit.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> June 8, 2015 </h1>
                <h2> Stickers for everyone </h2>
              </div>
              <div className={styles.description}>
                <p>
                  <a href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer"> Sticker Mule</a> sponsors stickers and we begin covering laptops everywhere.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> July 11, 2015 </h1>
                <h2> Now accepting donations </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Powered by Stripe, Operation Code incorporates SSL for the domain and begins accepting online donations.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Jared Zoneraich joins the team </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Founder of one of the first and largest high school hackathons, hackBCA, Jared Zoneraich joins the Operation Code advisory team.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2015 </h1>
                <h2> Welcome Mark Kerr </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Attorney, entrepreneur and ex-Army Captain, Mark Kerr joins the Operation Code board of directors. He is elected chair of the board, and the board begins having regular conference calls
                  focusing on infrastructure, processes &amp; procedures, and fundraising strategy.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> January 28, 2016 </h1>
                <h2> Hack summit </h2>
              </div>
              <div className={styles.description}>
                <p>
                  <a href="https://hacksummit.org/" target="_blank" rel="noopener noreferrer">hack.summit()</a> adds Operation Code to its list of coding nonprofits, and more military veterans attend.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> 2016 </h1>
                <h2> Speakeasy </h2>
              </div>
              <div className={styles.description}>
                <p>
                  <a href="http://speakeasy.co/" target="_blank" rel="noopener noreferrer"> Speakeasy</a> joins as the Operation Code conference sponsor. The Operation Code Battle Rhythym pencils in the first Tuesday of the month for its governing Board of Director calls.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> March 8, 2016 </h1>
                <h2> 501(c)(3) Application </h2>
              </div>
              <div className={styles.description}>
                <p>
                  Operation Code prepares 501(c)(3) application. Marine Veteran and Board Secretary/Treasurer Pete Runyon drops $850 for the fee and its shipped.
                </p>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>
                <h1> May 5, 2016 </h1>
                <h2> 501(c)(3) Approved </h2>
              </div>
              <div className={styles.description}>
                <p>
                  41 business days later, Operation Code is a 501(c)(3) nonprofit organization.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default History;
