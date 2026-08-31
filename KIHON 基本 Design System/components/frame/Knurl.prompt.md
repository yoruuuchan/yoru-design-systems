Knurl tick-band — a fine divider, or a progress track with mechanical detents.

\`\`\`jsx
<Knurl />                  // divider
<Knurl progress={0.62} />  // snaps to the nearest whole tooth; boundary tooth marked in accent
\`\`\`

The snap means a moving progress value advances tooth by tooth instead of sliding continuously — read it as a click-stop dial, not a fill bar.