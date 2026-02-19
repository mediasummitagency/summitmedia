const PainPoints = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6 lg:px-16">
        <h2 className="mb-20 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          The Booked Jobs System is
          <br />
          Built for You
        </h2>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-4 text-lg font-medium md:text-xl">
              if you&rsquo;re{" "}
              <strong className="font-bold">
                struggling to get enough leads
              </strong>
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You&rsquo;re good at your trade, but the phone isn&rsquo;t
              ringing the way it should. Word of mouth got you started, but it
              can&rsquo;t fill your calendar consistently. We put your business
              in front of homeowners who are actively searching for your
              service&nbsp;&mdash; so the work comes to you.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium md:text-xl">
              if you&rsquo;re{" "}
              <strong className="font-bold">wasting money</strong> on leads that
              aren&rsquo;t worth your time
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You&rsquo;re paying for Angi, Thumbtack, or HomeAdvisor and
              getting the same recycled leads your competitors are getting. Half
              don&rsquo;t pick up. The other half are price shopping. We build
              your own pipeline&nbsp;&mdash; every lead is exclusively yours, and
              they&rsquo;re already looking for what you do.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium md:text-xl">
              if you&rsquo;re{" "}
              <strong className="font-bold">losing jobs</strong> because you
              can&rsquo;t respond fast enough
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Leads come in while you&rsquo;re on a job site. By the time you
              call back, they&rsquo;ve already booked someone else. Our system
              responds to new leads instantly and keeps them engaged until
              you&rsquo;re ready to talk&nbsp;&mdash; so you stop losing work to
              whoever just happened to answer first.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium md:text-xl">
              if you have{" "}
              <strong className="font-bold">
                no idea what&rsquo;s actually working
              </strong>
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              You&rsquo;re spending money on marketing but you can&rsquo;t
              connect the dots between what you&rsquo;re spending and
              what&rsquo;s landing on your calendar. We track every lead from
              first click to booked job and send you a weekly
              scorecard&nbsp;&mdash; so you always know exactly what each job
              cost you to win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PainPoints };
