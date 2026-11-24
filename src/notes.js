/* ---------- revision notes + key-fact flashcards, one block per exam area ----------
   h = notes (HTML), c = flashcards [front, back]. Figures follow the printed textbook. */
const NOTES={
theory:{h:`<ul>
 <li><b>Futures vs forwards:</b> futures are standardised, exchange-traded, cleared and marked to market daily. Forwards are private deals between two known parties, with no clearinghouse and settlement at the end.</li>
 <li><b>The clearinghouse</b> is the counterparty to every trade and guarantees it. It matches trades, collects margin, oversees delivery and reports volume and open interest. It does <b>not</b> set prices.</li>
 <li><b>Hedgers</b> transfer price risk. <b>Speculators</b> accept that risk hoping for a profit, and they add liquidity.</li>
 <li><b>Locals</b> trade their own account: scalpers (minutes), day traders (out by the close), position traders (days or weeks).</li>
 <li><b>Open interest</b> = contracts not yet offset or delivered. A new buyer and a new seller add 1. Two traders closing out remove 1. An old holder passing the position to a new one leaves it unchanged.</li>
 <li><b>Technical reading:</b> price up + volume up + OI up = strong (bullish). Price up + OI down = short covering, so weak.</li>
 <li><b>Fundamental analysis</b> = supply and demand (crop reports, stocks, weather). <b>Technical</b> = price, volume and OI charts.</li>
 <li><b>Normal (contango) market:</b> deferred months above nearby, reflecting carrying charges. <b>Inverted (backwardation):</b> nearby above deferred, usually because of a shortage.</li>
 <li><b>Convergence:</b> cash and futures meet at delivery, so the basis heads towards zero.</li></ul>`,
 c:[["Who sets futures prices?","Supply and demand in open, competitive trading. Not the clearinghouse."],
 ["New buyer + new seller: what happens to open interest?","It rises by 1."],
 ["Both traders are offsetting existing positions: open interest?","It falls by 1."],
 ["Price rising, open interest falling: what does it suggest?","Short covering, which is a weak rally."],
 ["Contango (normal market)","Deferred months trade above the nearby month, reflecting carrying charges."],
 ["Backwardation (inverted market)","The nearby month trades above deferred months, signalling a shortage."],
 ["Scalper vs position trader","Scalpers hold for minutes and supply liquidity. Position traders hold for days or weeks."],
 ["What happens to the basis as delivery approaches?","Convergence: cash and futures come together, so the basis moves towards zero."]]},
margin:{h:`<ul>
 <li><b>Initial margin</b> is a performance bond (good-faith deposit), not a down payment. <b>Maintenance</b> is the floor, about 75% of initial.</li>
 <li><b>Margin call:</b> if equity drops below maintenance, you must deposit enough to get back to <b>initial</b> margin, not maintenance.</li>
 <li><b>Variation margin</b> is called by the clearinghouse from clearing members. It's due within <b>1 hour</b>, in cash.</li>
 <li><b>Mark to market:</b> every account is credited or debited daily at the settlement price.</li>
 <li><b>Hedgers</b> get lower margins than speculators. <b>Spreads</b> get lower margins than outright positions.</li>
 <li><b>Price limits</b> are measured from the previous day's settlement. They freeze the price, not trading. CBOT: after 3 straight limit days the limit goes to <b>150%</b>.</li>
 <li><b>Delivery:</b> the short starts it. First notice day is the first day a delivery notice can be issued. A long who gets a notice can <b>re-tender</b> it by selling futures.</li>
 <li><b>Option premium:</b> the buyer pays the full premium up front with no margin. The <b>writer</b> posts margin. Exercising a call gives the holder a long future, and a put gives a short future.</li></ul>
 <div class="nt-k"><b>Margin call method:</b> work out equity (deposit ± running P&amp;L). If it's below maintenance, the call = initial − equity.</div>`,
 c:[["A margin call brings the account back to…","INITIAL margin, not maintenance."],
 ["Maintenance margin is roughly…","75% of initial margin."],
 ["Variation margin: deadline and form","Within 1 hour, in cash."],
 ["What are daily price limits measured from?","The previous day's settlement price."],
 ["Does hitting the limit stop trading?","No. Trading continues at or within the limit."],
 ["CBOT limit after 3 straight limit days","It rises to 150% of the old limit, and minimum margins rise too."],
 ["Who starts the delivery process?","The short, by issuing a delivery notice."],
 ["Re-tendering","A long who receives a delivery notice sells futures and passes the notice on to another long."],
 ["Who posts margin on an option?","The writer (seller). The buyer just pays the premium."]]},
orders:{h:`<div class="cs-pic"><div>SELL LIMIT &nbsp;/&nbsp; BUY STOP</div><div class="cs-mkt">── market price ──</div><div>BUY LIMIT &nbsp;/&nbsp; SELL STOP</div></div>
 <ul><li><b>Limit</b> = that price or better. <b>Stop</b> = becomes a market order when hit (protects a position or catches a breakout). <b>Stop limit</b> = becomes a limit order, so it may not fill. <b>MIT</b> = placed where a limit would go, then becomes a market order once touched.</li>
 <li><b>FOK</b> = fill the whole order now or cancel it. <b>OCO</b> = one cancels the other. <b>Market on close</b> = filled in the closing range.</li>
 <li><b>New accounts:</b> the branch manager approves. Get the true name and address, approximate age, occupation, estimated income and net worth, and previous futures experience. Education is <b>not</b> required.</li>
 <li><b>Know Your Customer is NFA Rule 2-30.</b> Update active customers' details at least <b>annually</b>. The risk disclosure must be given and acknowledged <b>before</b> the account opens.</li>
 <li><b>Discretionary accounts</b> need written power of attorney. The AP needs <b>2 years</b> of experience, with a <b>$5,000</b> minimum. Each trade is still reported to the customer.</li>
 <li><b>Price analysis:</b> volume and open interest confirm trends (see Futures trading theory).</li></ul>`,
 c:[["Which orders sit BELOW the market?","Buy limit and sell stop."],["Which orders sit ABOVE the market?","Sell limit and buy stop."],
 ["What does a stop order become once it's hit?","A market order."],["What does a stop-limit order become once it's hit?","A limit order, so it may not fill."],
 ["MIT order","It sits where a limit would. Once touched it becomes a market order."],["Which NFA rule is Know Your Customer?","Rule 2-30."],
 ["Who must approve a new futures account?","The branch manager."],["Is educational background required on a new account?","No."],
 ["Discretionary account requirements","Written power of attorney, an AP with 2 years' experience and a $5,000 minimum."]]},
hedge:{h:`<div class="cs-eq">Basis = Cash − Futures</div>
 <ul><li><b>Short hedge</b> (sell futures): holders of inventory, farmers, anyone worried about prices <b>falling</b>. It gains if the basis <b>strengthens</b> (the number goes up).</li>
 <li><b>Long hedge</b> (buy futures): processors, importers, anyone who must buy later and is worried about prices <b>rising</b>. It gains if the basis <b>weakens</b>.</li>
 <li>"Under" = cash below futures (negative basis). "12 under" means −0.12.</li>
 <li><b>A perfect hedge</b> needs an unchanged basis. Hedging swaps <b>price risk for basis risk</b>.</li></ul>
 <div class="nt-k"><b>Net price, every time:</b><br>1. Futures P&amp;L = sell − buy.<br>2. A seller (short hedger) receives cash price + futures gain (or − loss).<br>3. A buyer (long hedger) pays cash price − futures gain (or + loss).<br>4. Check: short-hedge net = original futures + closing basis. Long-hedge net = original futures + closing basis too (the same formula).</div>`,
 c:[["Basis formula","Cash − Futures."],["A short hedger profits when the basis…","Strengthens (the number goes up). Short likes Strong."],
 ["A long hedger profits when the basis…","Weakens (the number goes down)."],["Basis goes from −20 to −8","Strengthened by 12."],
 ["Basis goes from +5 to −3","Weakened by 8."],["A farmer with a growing crop hedges by…","Selling futures (short hedge)."],
 ["A miller who must buy wheat later hedges by…","Buying futures (long hedge)."],["Hedging swaps price risk for…","Basis risk."],
 ["Net price formula (either hedge)","Initial futures price + closing basis."]]},
fin:{h:`<ul><li><b>Interest rates and bond prices move in opposite directions.</b> Always hedge the <b>price</b>. Worried rates will rise? Bond prices will fall, so <b>sell</b> futures. Rates will fall? <b>Buy</b> futures.</li>
 <li><b>T-bonds:</b> $100,000 face. Quoted in points and 32nds: 1/32 = $31.25 and 1 point = $1,000. Options on T-bonds are in 64ths, $15.625 each.</li>
 <li><b>T-bills / short rates:</b> 1 basis point = $25 on a 3-month $1,000,000 contract. Price = 100 − yield.</li>
 <li><b>Currencies:</b> paying in a foreign currency later? <b>Buy</b> its futures. Receiving it? <b>Sell</b>.</li>
 <li><b>Stock index:</b> portfolio managers short index futures to protect against a fall. Contracts = portfolio value × beta ÷ (index × multiplier). Stock index futures are cash settled.</li></ul>
 <div class="nt-k"><b>Stock index hedge:</b> $5m portfolio, beta 1.2, S&amp;P at 5,000 × $250 = $1.25m per contract. 5m × 1.2 ÷ 1.25m = <b>4.8, so 5 contracts</b>.</div>`,
 c:[["Rates expected to RISE: bond hedge?","Sell bond futures. Prices fall when rates rise."],["T-bond futures: value of 1/32","$31.25."],
 ["T-bond option: value of 1/64","$15.625."],["3-month T-bill: value of 1 basis point","$25."],["T-bond futures: value of 1 full point","$1,000."],
 ["Importer paying euros in 3 months","Buy euro futures."],["How are stock index futures settled?","In cash."],
 ["Stock index hedge: number of contracts","Portfolio value × beta ÷ (index level × multiplier)."]]},
spread:{h:`<ul><li>A spread is long one contract and short a related one. You profit from the <b>change in the price difference</b>.</li>
 <li><b>Bull spread</b> = buy the nearby, sell the deferred. <b>Bear spread</b> = sell the nearby, buy the deferred.</li>
 <li>Intramarket (same commodity, different months), intermarket (e.g. wheat vs corn), intercommodity / processing (crush: soybeans vs meal and oil; crack: crude vs products).</li>
 <li><b>Full carry</b> limits how far deferred can sit above nearby in a normal market. There's no limit in an inverted market.</li>
 <li>Spreads have lower margins but are <b>not</b> necessarily less risky, and they <b>are</b> subject to position limits.</li></ul>
 <div class="nt-k"><b>Don't trust the words, do the sums:</b> P&amp;L on each leg (sell − buy), add them, × contract size × number of contracts.</div>`,
 c:[["Bull spread","Long the nearby month, short the deferred."],["Bear spread","Short the nearby month, long the deferred."],
 ["Are spreads subject to position limits?","Yes."],["Crush spread","Soybeans against soybean meal and soybean oil."],
 ["What limits a normal-market spread?","Full carrying charges."],["Spread P&L method","Each leg sell − buy, add the legs, × size × contracts."]]},
spec:{h:`<ul><li><b>Leverage:</b> a small margin controls a large contract value, so small price moves make big percentage gains or losses on margin.</li>
 <li><b>Return on margin</b> = P&amp;L ÷ margin deposited.</li>
 <li><b>Contract sizes:</b> grains 5,000 bu (1¢ = $50); crude 1,000 bbl ($1 = $1,000); gold 100 oz; silver 5,000 oz; live cattle 40,000 lb; feeder cattle 50,000 lb; coffee 37,500 lb; sugar 112,000 lb.</li>
 <li><b>Pyramiding:</b> adding to a winning position using unrealised profits. Do it with smaller additions each time.</li>
 <li><b>Stops</b> protect speculative positions: a sell stop below a long, a buy stop above a short.</li>
 <li>Speculators provide <b>liquidity</b> and take on the risk hedgers want to shed.</li></ul>
 <div class="nt-k"><b>P&amp;L method:</b> (exit − entry) × contract size × contracts, and flip the sign for a short. Then subtract round-turn commissions.</div>`,
 c:[["Grain contract: size and value of 1¢","5,000 bu, $50."],["Crude oil: size and value of $1","1,000 bbl, $1,000."],["Gold contract size","100 troy oz."],
 ["Silver contract size","5,000 troy oz."],["Live cattle vs feeder cattle","40,000 lb vs 50,000 lb."],["Return on margin","Profit or loss ÷ margin deposited."],
 ["A long speculator protects with a…","Sell stop below the market."],["Round-turn commission","Both sides: $2 per side = $4 round turn."]]},
opt:{h:`<table class="cs-t"><tr><th></th><th>If exercised you get…</th><th>View</th></tr>
  <tr><td>Buy call</td><td class="pos">Long future</td><td>Bullish</td></tr><tr><td>Sell put</td><td class="pos">Long future</td><td>Bullish</td></tr>
  <tr><td>Buy put</td><td class="neg">Short future</td><td>Bearish</td></tr><tr><td>Sell call</td><td class="neg">Short future</td><td>Bearish</td></tr></table>
 <ul><li><b>Intrinsic value:</b> call = futures − strike; put = strike − futures (zero if negative). <b>Time value</b> = premium − intrinsic.</li>
 <li><b>Breakeven:</b> call = strike + premium; put = strike − premium.</li>
 <li><b>Buyers:</b> risk is limited to the premium. <b>Writers:</b> profit is limited to the premium, and risk is large (unlimited for an uncovered call).</li>
 <li><b>Hedging with options:</b> a short hedger buys puts (sets a floor price = strike − premium + basis). A long hedger buys calls (sets a ceiling).</li>
 <li><b>Straddle</b> = a call and a put at the same strike and expiry. Long straddle = expecting volatility. Short straddle = expecting a quiet market.</li>
 <li><b>Delta</b> = change in premium ÷ change in futures price. At the money ≈ 0.5.</li></ul>`,
 c:[["Call breakeven","Strike + premium."],["Put breakeven","Strike − premium."],["Time value","Premium − intrinsic value."],
 ["Call intrinsic value","Futures − strike, or zero if that's negative."],["Put intrinsic value","Strike − futures, or zero if that's negative."],
 ["Selling a put, if exercised, leaves you…","Long a future."],["Max loss for an option buyer","The premium paid."],
 ["Long straddle","Buy a call and a put at the same strike: a bet on volatility."],["At-the-money delta","About 0.5."],
 ["A short hedger using options buys…","Puts."]]},
rules:{h:`<ul><li><b>Who's who:</b> the CFTC (federal agency, 1974) is the ultimate regulator. The NFA (1982) is the industry's self-regulatory organisation. Exchanges are SROs too.</li>
 <li><b>Capital:</b> FCM $1,000,000; independent IB $45,000. A guaranteed IB has no capital requirement because its FCM is responsible. Only <b>one</b> guarantee agreement at a time. Undercapitalised FCM: notify the CFTC + NFA. IB: notify the NFA and an independent IB must <b>cease operations</b>.</li>
 <li><b>IBs</b> can't hold customer funds. Cheques are made payable to the FCM. Accounts are carried <b>fully disclosed</b>.</li>
 <li><b>APs</b> are always individuals, aged 21+. Registering with a second sponsor needs Form 3-R, and both sponsors are jointly responsible for supervision.</li>
 <li><b>Records:</b> 5 years, the first 2 readily accessible. Branch offices audited <b>annually</b>.</li>
 <li><b>CPOs:</b> exempt if ≤ $400,000 <b>and</b> ≤ 15 participants. Disclosure Document valid 12 months; performance data ≤ 3 months old; Risk Disclosure Statement alone on page 1; 5 years of principals' background; breakeven table excludes <b>incentive fees</b>. Monthly statements if the pool is over $500,000; annual report within 90 days. Funds are received in the <b>pool's</b> name.</li>
 <li><b>CTAs:</b> exempt if ≤ 15 people in 12 months and not holding out to the public. Can't hold customer funds unless also an FCM.</li>
 <li><b>Rule 2-29 (promotional material):</b> written supervisor approval <b>before first use</b>; keep 5 years from last use; radio/TV ads with specific recommendations go to the NFA <b>10 days</b> before use; no safe harbor. Hypothetical results with &lt; 12 months of real trading: the disclaimer goes <b>immediately before</b> them.</li>
 <li><b>Discipline:</b> answer an NFA complaint in <b>30 days</b>. Hearing = 3-person Hearing Committee panel; then the Appeals Committee (final). Fines up to <b>$500,000 per violation</b>. An MRA is a summary action with no prior hearing.</li>
 <li><b>Arbitration:</b> file within <b>2 years</b>. Mandatory for members, voluntary for customers. Up to $150k = 1 arbitrator (3 on request if over $50k, within 30 days); over $150k = 3. An unpaid award means automatic suspension.</li>
 <li><b>Other rules:</b> 2-30 KYC; 2-38 business continuity; AML programme (policies, compliance officer, training, independent audit, customer due diligence). Bona fide hedgers are exempt from position limits; spreads aren't. Once at reportable levels, <b>everyone</b> files daily reports.</li></ul>`,
 c:[["FCM minimum adjusted net capital","$1,000,000."],["Independent IB minimum capital","$45,000."],["Guarantee agreements a guaranteed IB may have","One at a time."],
 ["Records retention","5 years, the first 2 readily accessible."],["CPO exemption","≤ $400,000 total contributions AND ≤ 15 participants."],
 ["CTA exemption","Advised ≤ 15 people in the last 12 months and doesn't hold itself out to the public."],
 ["Disclosure Document: how long usable?","12 months from its date."],["Performance data in a Disclosure Document","No more than 3 months old."],
 ["Which fee is left out of the breakeven table?","Incentive fees."],["Pool size that triggers monthly statements","Net assets over $500,000."],
 ["CPO annual report deadline","Within 90 calendar days of fiscal year-end."],["Rule 2-29","Promotional material: written supervisor approval before first use; kept 5 years."],
 ["Radio/TV ad with trade recommendations","Submitted to the NFA at least 10 days before first use."],["Answer an NFA complaint within…","30 days."],
 ["Maximum NFA fine","$500,000 per violation."],["Arbitration filing deadline","Within 2 years."],["Arbitrators for a $200,000 claim","3."],
 ["Arbitration: members vs customers","Mandatory for members, voluntary for customers."],["Who is exempt from position limits?","Bona fide hedgers (spreads are NOT)."],
 ["Rule 2-30 and Rule 2-38","2-30 Know Your Customer; 2-38 business continuity and disaster recovery."],
 ["Member Responsibility Action (MRA)","A summary action taken without a prior hearing when immediate action is needed."]]}
};
