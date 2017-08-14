const records = [
  { id: 1, username: 'sean', password: 'scully' },
  { id: 2, username: 'terje', password: 'lonoy'}
];

const agentRecords = [
  { id: 1, userId: 1, agentName: 'ikke grim', fullName: "Sean Scully", caught: []},
  { id: 2, userId: 2, agentName: '007', fullName: "Terje Lønøy", caught: []}
];

const profiles = [
  { id: 1, userId: 1, firstName: 'Sean', lastName: 'Scully', description: 'Sean er latiner, og apputvikler i Sopra Steria. Han kjenner Karl fra latinstudiet og er også Karls forlover. Sean er veldig opptatt av språk, øl og gode IT-løsninger. Han har laget denne, faktisk. Spør ham om: Surøl.', img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADGAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6JcVA4qzIKgcda9CJ5pA1RsKlamN0rVEshNRstSsKjatESQnimNUjUxhWiEyFqSpNuTxUxtvLhWSXKqxwOM8VMpxirsqMXJ2RV2kjIBppFPvNb062gKBw4K5O0Z25yCfbH+FcxJ4vsbZ5YpJRLtbKOoxjGeCD+H+RXOsZA6PqsjoStRslULXxTYTuI7h4lZyVWRG+Q/h1zyPzFarXds7Sxq6l+D07cEHj/PNXHFQbsS8PJFNlqFxV2VCuR6cVVcV1J32MCqw5qBxxVt1qBhVJiK5FROKsMKiZapDK71ERUzComqwQgODT/P2pgVEc0xqLDuRzSk0UyQUUWC57c4qs4q9ItVpFx0rxYMoqMOaY1TOKiYVsiWQtUTVM3WoiK0RJC1NqYLuYgkD3NVrzUbTT2Cyt+9I3HcNo/M8UTqqC1LhTlPYuacgF2jOOAM4PG7jpXOeOvEcmnKsMRwVIb5lySMn19Poep6Vp2N55ga/l3Rxn542PVuvRfT39O9eb+Nb9Lq+lkOMngD07YFeViqzqP3T1cJQ5VqcrrfiOe6EnmN94klnUE/z6cdPeuSvNXuNxPmg7uvyY/lWrf26yt1wc9KyprLntWEYs7HFFZdXuI33ZPPBwa7Twr408mdRcMSMbRv7D/OPyrhZrYr/SoTE6NlCQR6VojFxPpXSb1boBoJfPDAsCpyCuev61oyRkKCRjNfPXhHxDqOj36eRI3lykIybsBu35/wCfavfNNuo7yyimibejoHDHI6j3r1MLUurM8zE0+V3BhkVA4q2w5NQSLXcjkK7CoWFWSKidfQ1aAqsKjZKsstJtqgKbJUbJV8oO9RyBRTuBnOpoqaXB6CimB7nJHVSVMGtNhkVWljr5yEzsqU7aoyXXFQuMVfmjqpItdcJHM0VW71Ewqw60W8QknVW6E1rzJK7JSbdkOQLbWLTEYkbJQkelctpmiya7qfmXDmSx+9v42vz0HHtyeDXX6laHU54Io8JblsSkDO5R/D9P/sav2vlWxMMShUjACDP4Zrx5zdabk9j2KcVTjZbnEfEJE06zjhtwY4kQ4POOMDHTGegH/wBavDtQut0rFmJJJr1n4lagJDODLkfd2qQenQgfj17YFeJ6g5EjfKc5oudMNtQMwJ4qrLJu71GrknkEVG+KY2Rztmq3epXNR96okkiYZwRXbeGNeWzsza3U21N5ZWwcYPJzj+XFcJnBqySJYNhOO4Poa1i+xjUjc9v0PXbe8IhUkShc7O31GBk/rW2eR0NfP2i6ldW9yI1mlRozwFOcf7WK9h8Mak1xbhHdJkx8kie3Zh2P+fr6GHxHN7rPOr0eXVG0w61Ewqw4qIiu9M5CBhTamK0wrVAQtULirLLUUi00BTkHNFPkWimB7zTWUGnUV8ueu1fcpTR+tUJkxmtsgHrVO6g4yK2p1LaM5atK2qMeRaZGD5i7PvZ4+tWJUxwak02LNxvbonI+tdE5JQbZjTi+dWNO3UW1r838PJxWDLc4E8ly6xRZODuIwuASSf6+9autzeTp7IjlHcFVYLnbx1PsPwrBjnhsbVZMbpFTGABknA9enBBxnnt6HzvI9RLqef8Aj1orWGRY1Klvvhl24PJyPzPP4V5FenLEnnmup8b601/qE7lwUHCryABnsP8APWuInuN55xSR1xWhG7Ac03g/WmM/NIJB1qhWAgY5zUbAZNOaSoy2aaBoY2QcjkVIp4oVc01ht+tXEykh7F4ZobuP+EbWGevcV6x4EZb6JmUNFcpgiUDrn+F+x9umfTg15dCvmWMwHJHIruvhWW3RK21mT5QwORtIJB+o+Ye2TXTRtzq5x19Ito9NIbHzYz0NRsKsMKjYV66PJuQ4puKm2UhWncaK7LUMgq2wqCTrVJjZUdaKlYUVRJ7dRSBgaWvmD2gpCMjBpaKAKdzbbuV61QGYpI1A+ZnA/CtuszUI8XtuUznk59MY/wAaKk3yNEQppT5kJq8ixRNJIcKili3cV4l8RPEEr3Qit8CHkFV6E/y7ngV03xh11tKZEinnE0g4TcAuPoOe/f244r5/1jxPfXDOJZAQww20bdx9TjFc8pNuyOynDS4++uxJIxLc/wAVZjyZbisq6v2lbcx5PXJot592PmFVdmqZpM5xyabvOMVGhJFJtw2Sfwo5iiTP50uagkk256VWe7256D8apMlmoh209juFZMN4G6nircU8YHzOCT0Ga0jJGUjb0Zc+avbFdJ8JJRFrMkErEAEqgPUkngfzP4VzekyIkjnIIZcDac+9bXghhHrcU6bg27BAGe/8sf1rppys4s46qumj2xhURFWCvrUZXNeweMQ4pCKsCInrgfU0hRR3yfpQUrlVlqPZn1NW2IA+6M+9QyO/TOB7DFUmUV2gI5OFHuaKVhRT1EetFyKcs2OtOaMGo2iIr5+6e53WnF6EonQ96erBvunNUinrSBCD8hINHIuhUaz6o0KpaidnkvkffAwT1z2pwNwvTBrmfFmo3CaroFkB5YmujNI+MgIg5B+rOgHvWVRWjc6aT55cqPB/i94iXUPEN8QxdYXMUYA5IHbFeUahFceWjyQTFpF3jgquPb1HvXrPjnT7T+1JZ9XvJ7sM+Utwch/ZUHQe7ZHseced6xeyz3BPl7FHAXduIA9+lYp9TtUdDiJluc/Naqo+lLDIY2HVPY9K3JfNl4EeT702HTpHflQPwrS6aJs+hoaAWuFdWHIGQatTKATkAfQ1paHppt7eV2HUd6zbs4kbNSkmzWzSMPUZzG5VayJbhjn5sD25rbvIN8hIAP1FURAEbJTH0q7GLbKMV6FOC7j6rxWjb3PALbWU/wAS/wBRU8Zg2gPH+YqRrWJlzGvlt2OKegtUbfh8g3LKf4lOK7Lwnbvb6zaNuzbysGwvAJ5HP0y351w3h9SuoQBsD5gOK7X4c3cs2tz2QdmRYxMYzyM71GR+DH/PTWD2MKierPceMcD86aSfoPaprWKSSJfkJbHNOkt5E5dGH1FeypI8NxaZW20hHapxGfQ077O5XcBxTuNJlCRcVA4zWjJbnvULQH0qkx2ZnstFXxak9jRT5kFmen7aXBFOor549eyGMu7qKheA/wANWaKabRMqcZblYCZBxhvauB8eaktt4x8NwzqgLR3UjZxyoiPAJ9Tz+Ar0evKviRp8l9490fcrCKO2d1lwSFPzBlOMY3AqM56ketRVd4m+Hioy+TObm0aBoZdSvlUzTN5jCY7fkHO3theCOMe+OK8o1sWouZvsyYXdjJr0v4q6wtq39mQSYWJdjYHB/wA4zXjt1dZY56VjE7YrTUPKMrHnag9qt2UEHmBN4J/OsSa8botb/hSCCaJ5pW/ehto5xTbKS6HQG38m1IGDxXH6ooEzYrv7q122TXcjosAHy/MPm9BXB6i6PI23pVRLcfdMrbu79KjaPrjkU6QOWIX7veolm2uUPIFaN2OZR1FWIHtU0UWMYyKcm3rViFd3ShNMbjYl05Nl3E3cMDn1rp/g7ELv4laPGhb98s0bgnghY2cZ/EfpWJZR/vkOPusK6/8AZq00z+PopZT81nbSzkZ9QI//AGc1d2rNGDs4yPpJNJkT7hVcU82lyBtOGHvWvuAoDD1rX20upw+yj0Oek07DZZQPoKRrBQuUzj6VvttPXFMKL2q1XkT7FHMTQY96qvFjoorrHto26gVCbKHuFNbRxCIdFnKtE565FFdSLWEf8swfrzRVfWfIn2JrUUUV5p3BRRRQAVz3jHTpb61ge2H76ORc8Z+UupPHfBUH8K6Gkb7ppNXVhp2dz5A+JV2Z/E+o4YlUmZQT9a4G4nwcd/Su1+IVq9r4g1qM87bgDJ65+bP6iuDhTd88h5bn8K50d97IVCTye9XLeee2VhC2A3UEUsESsBgVM6ACrsgTfQuR63LcWX2e8BVl+6wPyn/Csue5Ug4BzRMuFPGapjlsFTSXkW5O1gW6kJxs49c03ncSw6+lTLHxnFDDNaW0MrtBC4B61bjkxjFUHj9Dg0+0kLSFD1FRsVzJnQWErOsm3O7YSK+ivgT4Lbw9oU2p3Ue2+1HBAOCUhGdv0LZ3HnptzyK8f+C+mwal8Q9PtryAXFsEd5I2GVOFYjPtkLwevSvrYEY9K3T0OOrL7JXZCOtRMpPcj6VdJB7imlapTOZxKgBA4yaMNVliB2FQM57CqTbFZIDmmMaazvmoySe9WkJscWPaikWigRq0UmfY0A59a5zouLSbh60tFACZGKaZMdQadtFMaPceuKehLv0Pmz456WbbxbLKoIhukDLxwu45/E7w2T23CvG7q32ttxX0/wDHHTUkgtZ5FLqEZTtHOAf/ALIflXzrqNsThzn0zyM+hweea5pK0mjug3KCbOau7G+MZa1uJAR1XOKi0mGWVZVupHEqjI3H3rprdPlBHXrUtxFG8ZYqN/qRVqWlmWo63TMqfTjDcCNJ+Cuc1X+yTurEzjCnFS3KOX55PTIaq/lvjHzY7jNNJFuMu4jW7II2e5ZQ4znNZP2m+abEPzD/AGhWxHa56gD6mrKwog+QDPc1ehnNPqzNhE4I89gT7CtO1iCyl/8AZAqJk+bA/Orka/dVf0qGRc9r/Zl0szazq+rNnZBCtuoKcMXOcg+wT/x6voNselcN8FNF/sT4f2QYYlvCbt+cg7sbSPqoU13DMK0imck3dkTHnio5CT61K7DtVcls8nj2raJi2NLY70nnBTyaJBkcZqlJGT6/zrSKT3IbaL/nr3IH40xpVB45qisRz3/KpDgjABp8q6CUm9yXzsHjBoqq3y0U+UOY6WiiiuM6goopM0ALRSZFLQBy3xG0ttU8M3IhBMsI80AD7wAOR+XP4Cvmm803zkKgZZTgZHJ64/X+Zr6+NeE+OtATQ/EsjW5xazYljUcCPPVfzzj2x6VjVX2jooS+yeJxoVcqwwfSiXIBUfSug1fTzBcswxhuQf8ACsm6iQSHqOM8VCdzoRhXSENnBP0qryDyDW1ND6VTkhPpWqArL9akYjBPemtGRTlTHBqjOUhEXPOOa7X4XeFH8WeKLe1dHFlEfNupB/DGP4c5HLfdHfknGAa5RI89PrX038A7G2tPAiXEEaCe5mczSAfM204UZ9AOg6cn1NNLUwnKyPSwyoAqjAHAA7UxmBpuaQmtUjlbEYnsKi8xs/dp5ao2NWQOZt1ROufakJPY0m71NMB1NZc0jMB0NRtKR0p6juKyGimNJminqTobhlHtTDN7iuXt/GPh+4UmPVrM4OOZMH8jU/8AwkuiHH/E2sP+/wCv+NZciK5mzfMvvSiX3rnv+Em0Ttqtj/3+WpI/EWjt93VLE/Sdf8afKgTOgWQU7f8ASsUazpw2/wCn2vzdP3q8/rSvrOnjOb624/6ar/jU8hXMjYL5ryX4qTg6sQwztVR1x2B4/OtjW/iZoGk+JbHQpJp59QvGVUFvHvVSxwu5s4H9BycVzPjpzeXUknPr61z19EkdeETcnI861Yq8a7SDtzzn+dczcSKpK8DnvW5qGUdkPQ9c1z+o2NxGu+LDxnp61jE6ZJohDqR60jMuPm/nWc0rxt86spHXimNcluik1omTctzIuQc5zUORn39KgTzpDwhX68VZihx97k1aZm1clQ4GPzNfSP7P0xk8DzIxH7u9kUfTYh/qa+cMV7T8AtXitLLV7W5nSNQ8ciKx6khg2PyWtIasxraRPb2bFNL1kjW7F+l3EPq2P51WuPEWnwFg90pwM/KC2fyrflOO5tk0wmshte0/nN9B/wB9VC/iHTB/y/RfnVKLFzGwz0zeKwpPEmk87r1PwB/wqu3irR163f8A443+FVyC5jpC4qNm9K5xvF+jL/y8sfpG3+FRN410cf8ALaQ/SI01FgdIzEUVykvjrSl6ee30T/69FHKxHOr8K9PBDNf3xYdwVX+hqx/wrbTUyWvdQb2MqD/2WvQJCAOelRSofTgjPArG5tY4hPAGlAfPLeMOvMoH8hUi+DNJi6JM3bmVq29W1ay02P8AeSB3I+VE/Hqa5W88VSSZETRxJnhU+8R7nsfy6U7szcki3eaTo2nRf6QioOvzSsT7cZzWS+oaHFZmaK3xwWUMT+vPFcl4q1c3aGCUlgSBlWzgngkn2znPauastQmuzGctiZNxIxuB+UDOTx1o5mK7Z6X8NtJsrm41PxXdoJNXlne2tzwVtogoB2jszZOT/dwBgFt21q583zT6DHWuD+G+urb3l5pkz7YrhzPCS2fmxhlz34AP4Gu9kTNu2erk5rzK1+d3PZw7j7Ncp5vrAHnOVHB9KzC+63KNzW1rUeJn7jPUVhMMNxTS0LZlXEY31B5Y7ACr86HdnFVmQ7ulUiWRbBinBfapo4tzVIYwB7VoiLFYJT/7Xu9EgkvLFws0e04b7rDcMqR3BGR+vUCnkYNct4q1Fdn2ONgXyDIR/KtoXvoYVGrantel+MdG1KG3cSSxNKu6RCN3lH0Pc/UA++K6CIW95FutLpJVU7SUYNg4zg47+1fLEN3LAyPE5Vh3Brbs/EV7azJPZ3EsEyfxI2Mjrg+o9jXUmcFmfRLWx534znjnqPpUEts4bjDD2Oa4Pwt8WEASDxHbM+eDdQYB+rJ0+pGPYV6Ppd1o2sQ+fpd3HccZIWQ5UHj5lPI6d6fMKxQFt7LjpzUctqi5yhPHOOa25o4FYea8SZ6H1/WmLDAFJDu2epCcH8qdwsc81uedseQPf/69QCIFiGj244yW/wAK6RrGMxlijYzn5jiq0lquPuLjP97A/nVXAxI7cSE7V+6cE5orXaNWwEkT224OKKAsdtqviVbCEvHAxzxy2e1cFr/jDUbiQp5pRMkAL7YNFFc5F29zmpb6aZkLuxd8uSTxjvUTyzJ92TlBuzjtgY/rRRSGjO1BPPhmMoBWT5MljnqM1i3DFLiRHw2YTcD2H8WCOhJDHpxkc0UUFEMtxMLiJ1O1423rtOADkngY46f56V6V4c8TtqekRtLGVl3GNiOQTnBNFFYV0uW514ST5rFbUsSMW5Geaw5Uw1FFc53ohlhBH/1qg8kbsUUUAP8AKCrVa4OxSaKKuJMjl9f1x7dDFApDsPvHtXHFmdiWJLE5JNFFdcVocM3qOBqeM0UVaMmSBtrVtaNM0V1FJA7xTKRtdGII+hBooprchnoeh+PtVsG8q48u8hQ5+dQsgHPRgP5g16RourWviOxFzBJfIm4xlW2pzgE/dJ45ooqiLmiLOCOQgeY3bLtk1n6iyxSLFFChkbOCSQP0ooq0UTpaTyKC7QxrjH7tcn88UUUUAf/Z", tags: [
    "Dataspill",
    "Det private næringsliv",
    "DNS",
    "EDB",
    "Latin",
    "Robotane kjem!",
    "Sjakk",
    "Skeptiker",
    "USA",
    "Ølkultur"
  ], score: 100,
  },
  { id: 2, userId: 2, firstName: 'Terje', lastName: 'Lønøy', description: 'Utviklet dette programmet', img: null, tags: ['Brettspill', 'Programmering'], score: 50
  },
];

exports.findById = (id, cb) => {
  process.nextTick(() => {
    let idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
};

exports.addCaughtAgent = (userId, agentName) => {

  let agent = null;

  if (!agentName) return null;

  for (let i = 0; i < agentRecords.length; i++) {
    let agentRecord = agentRecords[i];
    if (agentRecord.agentName.toLowerCase() === agentName.toLowerCase()) {
      agent = agentRecord;
    }
  }

 if (agent === null || agent.userId === userId) return null;

  for (let i = 0; i < agentRecords.length; i++) {
    let agentRecord = agentRecords[i];
    if (agentRecord.userId == userId) {

      const alreadyAdded = agentRecord.caught.some( caught => caught.agent.userId === agentRecord.userId);

      if (!alreadyAdded) {
        agentRecord.caught.push(agent);
      }

      return agentRecord.caught;
    }
  }
  return null;
};

exports.findCaughtAgents = userId => {
  for (let i = 0; i < agentRecords.length; i++) {
    let agentRecord = agentRecords[i];
    if (agentRecord.userId == userId) {
      return agentRecord.caught;
    }
  }
  return null;
};

exports.findProfile = userId => {
    for (let i = 0; i < profiles.length; i++) {
      let profile = profiles[i];
      if (profile.userId == userId) {
        return profile;
      }
    }
    return null;
};

exports.findParticipants = () => {
  return profiles.map(({firstName, lastName, description, tags, img}) => ({
    firstName,
    lastName,
    description,
    img,
    tags
  }));
}

exports.getHighScore = () => {
  const sortedProfiles = profiles.sort( (a, b) => b.score - a.score);
  let highscoreList = [];
  for (let i = 0; i < Math.min(sortedProfiles.length, 10); i ++) {
    const profile = sortedProfiles[i];
    highscoreList.push({
      name: profile.firstName + ' ' + profile.lastName,
      score: profile.score,
      rank: i+1
    });
  }
  return highscoreList;
};

exports.findByUsername = (username, cb) => {
  process.nextTick(() => {
    for (let i = 0, len = records.length; i < len; i++) {
      let record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};
