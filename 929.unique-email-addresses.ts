function numUniqueEmails(emails: string[]): number {
  const emailMap = new Map<string, number>();

  for (let i=0; i<emails.length; i++) {
    let [local, domain] = emails[i].split('@');

    local = local.replaceAll(/[ .]/g, '')
    local = local.replaceAll(/\+\w+/g, '')
    local = local.replaceAll(/\+/g, '')

    let email = local+'@'+domain.replaceAll(' ', '');
    email = email.toLowerCase();

    if (emailMap.has(email)) {
      emailMap.set(email, emailMap.get(email) ?? 0 + 1);
    } else {
      emailMap.set(email, 1);
    }
  }
  let sum = 0;

  for (const value of emailMap.values()) {
    sum += value;
  }

  return sum;
};

// Test case 1: Empty input
console.log(numUniqueEmails([])); // Expected output: 0

// Test case 2: Duplicate emails
console.log(numUniqueEmails([
  "test.email@gmail.com",
  "test.email+foo@gmail.com",
  "test.email+bar@gmail.com"
])); // Expected output: 1

// Test case 3: Duplicate emails
console.log(numUniqueEmails([
  "test.email@gmail.com",
  "test.email@gmail.com",
  "test.email@gmail.com"
])); // Expected output: 1

// Test case 4: Mixed case emails
console.log(numUniqueEmails([
  "Test.Email@gmail.com",
  "test.email@gmail.com",
  "TEST.EMAIL@gmail.com"
])); // Expected output: 1

// Test case 5: Emails with leading/trailing spaces
console.log(numUniqueEmails([
  " test.email@gmail.com ",
  "test.email@gmail.com",
  " test.email@gmail.com "
])); // Expected output: 1

// Failing case 1
console.log(numUniqueEmails(["fg.r.u.uzj+o.pw@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com","fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com","r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com","r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com","fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"])); // Expected output: 2