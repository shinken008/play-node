wrk.method = "GET"
wrk.body   = ""
wrk.headers["Content-Type"] = "application/x-www-form-urlencoded"
wrk.headers["Cookie"] = "__dwd_shield_sid=s%3Aova568mkSN55ScsIMFMy2vDGyH75eXLy.tchiFKbltOEcMY1CmJuZi%2Ffa66bJGjmaI0jUkMjPj0M; __dwd_batman_sid=s%3AlhV0hANeXmUs3hGsTwIbtc5EeBXjbke2.ruSFnq9a3Zn89Jc45R0yK66SvIE%2FHF%2FqRe2rnyGbF40"
wrk.headers["Host"] = "127.0.0.1:3000"

done = function(summary, latency, requests)
   io.write("------------------------------\n")
   for _, p in pairs({ 50, 90, 99, 99.999 }) do
      n = latency:percentile(p)
      io.write(string.format("%g%%,%d\n", p, n))
   end
end