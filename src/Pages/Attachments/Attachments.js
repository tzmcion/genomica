import React from 'react'

export default function Attachments() {
    return (
        <div style={{width: '1080px', margin: '10px auto'}}>
            
            <h1>Payment details</h1>
            <p>Payment details will be shared later</p>
            {/* <p> BANK: PEKAO SA</p>
            <p>SWIFT CODE: PKOPPLPW</p>
            <p>IBAN PL: 90 1240 4722 1111 0000 4854 4715</p> */}

            <h3>Declarations</h3>
            <p></p>
            <p>Below you can find links for the declarations examples. </p>
            <p>Send them to our e-mail address with your abstracts: <b>genomica@uj.edu.pl</b></p>
           

            {/* <a href="https://drive.google.com/file/d/1l2M2ijuATs29zk0ppKyU-NyqmcLdRd3z/view?usp=sharing"> Declaration template [PL]</a> */}
            <p></p>
            <a href="https://docs.google.com/document/d/1jlBaXUM4kx60UMuxXZ-wdQm3KRYUcnLj_x8eRpqe5yQ/edit?usp=sharing" target='_blank'> Declaration template [EN]</a>

            <h3>Abstract template</h3>
            {/* <a href="https://drive.google.com/file/d/1lRZEhzLxxXjSO9998yAdFRQax8GanX6P/view?usp=sharing>" >Abstract template [PL]</a> */}
            <p></p>
            <a href="https://drive.google.com/file/d/19uqL3oknAzRIDj-KYoIu3Jw6X19baFJn/view?usp=sharing" target='_blank'>Abstract template [EN]</a>

        <h3>Participation in the conference will involve a fee, the amount of which will be announced soon. The fee will include:</h3>
        <ul>
            <li>Conference packages (containing T-shirts, bags, folders, pens, and sponsor materials)</li>
            <li>A two-course lunch on Saturday</li>
            <li>Sandwiches, drinks, and sweet snacks during coffee breaks</li>
            <li>Participation diplomas and certificates</li>
        </ul>
        </div>
    )
}