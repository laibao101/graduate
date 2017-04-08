'use strict';

let icons = {
	toilet:'data:image/png;base64,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',
	tolietActive:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAPnklEQVR4Xu2de7RV0x7Hv0kkKcorRcrxSF5JcofHzdsVRa5y8ohGt4ZR6nqmNJJHImp4hmtIuL28kkeuV7i4IVQeSVFCXRRF6EF1x2c5+9y9115r77n2eux9dvP7zxnj7LnWnPM3v+s3f/M3f/M3a8lik5ZArU2697bzsgTYxEkQlAB1JbWW1KbqbxNJ20naKKn+Ji7LQruP7ArBBkm/S1olaZmkjyXNlDRX0grTF5oSoKmkXpL+IqmZpJ0l1TatxJZLTAIrJS2RNEPSzZLm56vZhAB9JA2QtJcd9HziLKnfIcI4SUNytSofAW6U1LtKzZdU72xjjCSwTtJLkjr6lc5FgDFVar+OUVW2UKlKABvjCUl/9WqgHwF6ShopqXGp9sq2K5AE1koaWjWmGQ96EQBrfpakikBV2MKlLoFFkg6X9N/0hnoR4O9VTLGqv9SHNFj7mAqGSbo2HwFYQhwW7N22dA2RwDuS2uciQEtJ0yU1ryEdss0MJoGlkjpIWpB6zD0FdJY0SRIeP4vykwDGYDdJU/0IMFjS8PLrt+1RmgQGScK/48CtAW6T1N+Kq6wlcJekfn4EGC+pe1l333bun5LO9SPABEmVVkZlLYGcBMA46FTW3bedmyKpi58GsAQof4JYApT/GOfsYWkSoG7dutpzzz21xRZbaPHixVq+fHlZjVPTpk21yy676JdfftGCBQv022+/Fat/pUWAVq1aadiwYercubO23HLLaqG89957GjlypB555JFIBdW+fXsdffTRvu987LHH9Nlnn0VSZ+3atdWnTx8NGDBAe+1FPM0f+PnnnzV58mSn319//XUkdQV4SekQoLKyUg888EDGwLs7Mn78eJ1//vn6/XfC38Ljsssu0803Ey3ljVNPPVXPPPNM6Iq22WYbTZ06NSfZfvzxR3Xp0kXTp+N9TwylQYBjjjlGL7zwgvhK8mHMmDHq27dvvmJGvydBgFq1aum5557TiSeemLdNTAmHHnqo5s4lljMRFJ8ADPq8efNUUWEecoDqfucdNrPCIQkCoNkmTMClYoZXXnlFfBAJofgEOOmkk5wvJAiYKnr2JFApHJIgwGuvvaajjjoqUEP32Wcfffrpp4GeKbBw8Qlw/fXX66qrrgrUfgwzVglhETcBNt98c8fSZzUTBL169dL9998f5JFCyxafAPfee6969ybY2BwrV67UdttxBiUc4iZAo0aN9P333wdu5ODBgzVixIjAzxXwQPEJcNNNN+mKK64I1PYvvvhCLVq0CPSMV+G4CVCnTh2tXr3ayLhNb9+FF16oe+65J3T/DF5QfAKcfvrpeuIJIpXNMWnSJGFchUXcBKB9M2fO1CGHHBKoqW3atNHs2bMDPVNg4eITAIfPokWL1KQJRwvNcPzxx+ullzjjEA5JEADnT5CvGadXUMKEkELxCUDjzzzzTGMvH945ykeBJAiAIThjxgyjQcXBxYqB8gmhNAhAZxkM3L04TvzAGhnvHJZ1FEiCALQT7fbiiy+qdWsOU3tj3bp1uuCCCwL5DCKQQekQgM506NDBsX4POywzEv2bb77RLbfcoltvvVXr16+PoN9/vCIpAlDX1ltvrSFDhggDr2HDhtV92Lhxo0OOgQMHJjXvp8uvtAiQalnz5s213377OfsCWPxz5syJdOBT9SRJgFSd9Onggw8WO4JsBGHsQfAioTQJkJQwikGApPpmWE/xCMBc365dO2dO33fffdWgQYOc83+qQ7/++qvmz5+v559/Xi+//LI2bCA5RmGIgwBoLnb1DjzwQMdZtdlmmwVuHNMC/oPPP//cmR6mTZsW2Q6oqzHFIQBCYlfvyCOPDCyc9Ac++eQTZ2cQ47AQREkAHFN33nmnTj755EKakvOZL7/8Updccokef/zxqN+dPAFw/LA7RtRPFOBrufzyyzVq1KjAr4uKABD56aefzjDuAjfG4AFWSRiLESJZAuDAYefPZN8/aCf79eunu+7inIM5oiAA09dbb70lgj6SwKBBg3TjjdWHecJWmRwB2BhBZe+4445hG+35PE4UgilmzSKdgRnCEgA7hriEBD13ji3AKuLDDz8062TuUskRANZGrL6yusbeO74EU4QlQKdOnZxQr6QxZcoUx9CMAMkQAEt4yZIl2nlnMsrFCwzMjz8mTV5+hCUAQapRuaXzt/b/JdACyLKQrWZXPckQgBAu5skkQHDJDTfcYFRVWAJAasK7iwGM6SeffDJs1ckQYPjw4SLIIQm8/fbbWa5kv3rDEIBNniLG8zsrH9zjIZEMATBYUM3pYPnG+naHHXZQvXr1AvUDwS9dutT3WTZfTNyrYQiAbx9XbrHAOYJrrrkmbPXxEwAHycKFC7Ma+uabb+qII45wrPaDDjooUEdWrVqlxo0b68orr9S112bkOXLeYxpTF4YA9evXF+1wg/mZuZlVDxFBYUDoGyuN9M2j1PsYfEgQEvEToH///rrtNnJNZIL17EMPPeQYh4WA0GkE9P7772c9/tRTTzmni/IhDgJggKLtsHmwfcIANzlEmzhxYtZragwBiNw59thjszqw//77O+v2QqNfmf+IJfzqq6+cnbV04Efffvvtxb5BLlgCKF4NgOriYCcGUzo48MnU8Oijj+qMM84o6CPBqYQXjnArwq7cYI2Oe9YSIKcI4iVAt27dRACnG2yasLnBXBnGhdqyZUsnysZroO+777684eZWA8SsATjM2b17dpohTgOtXbu24F28FKHw/3NKCCK5N5dYBTA15NoutgSIkQBYwN9995223XbbDAVAPB/zM0ZM0PMAbk3CPnnHjh2dE7z8dSPfGUJLgBgJgE/ea58e7xVeLC/fQFBjYM2aNc5y8LzzztPdd9+d9TgOKOLw/GAJECMBRo8erYsvvjhL9qzRiXLBEIwCp5xyij744APHqeQG/ycyxxLAVwTxGIE4L0h9sscee2TVjO8cCz3IYYlcREnlC/BzKLHaILDUC1YDxKQBSPXileTg3XffdeIAmQZMHDUmGiK1pMQj6KXucUTdcccdlgDewoxHA7Dv7xW1guuS/2O140uPCiwFWU567TjiiCISyWoATxHEQ4A33nhDhx/OhRSZaNu2reMjxwaIEqwmiAlk6cfmUjrYOOJ/5OBxw04BMUwBCPvbb7/NCvFm965Zs2bOQHkZh2EI8eqrrzoJmPAJkETKDRxSXhnGLAFiIAADwEC4kfLM4cIlBUqUYAcO38Jxxx0nDo+6gUPqnHPOsRogW+jRTwHErnvFq2H0ffTRR85hhzhAaBaHRbAv3NuwK1ascIJR3enlrAaIQQOw+YNzJh24ffkf2oF9gDgwbtw453Qt6ea8jD78AfgF0mEJEAMBcPW6I3w4C8CJmWeffTaWkzMMKnYHPgb2B7ziDwjdJvmCJUCGCKKfApiD3Vu8OH5YjqGet9pqqzgUgPNOfAz4BZhm0ncZScGKU4oz+JYAMROAVcDDDz/sZMZEG5AGjrV/IfkAgzLl6quvdkLETjjhBDElEBtIvj0MQJxQdhmYJYLoNUCqChw9fHGpyNnbb79dF110UdAxDVSeUzqpMCzOIrATiQFIAKoXwtgABLlg27hP/6aikqMKCcOtToibGzUqKpjGk9zRa28g0AjnKcxAc2CCbWgThCEA78ehxdIzHdddd52GDh0aWUwgRGJac9tVEWUSi08DpAuFrJ6c6U8CPXr0cIJNTRCWALvttpsT1kZsI+TD2cRKh23qfBrgp59+coJYcmURTWUrP+2005zYSbyoxDsSDY1GjQDJEIAc+eT3SQLk3j/rrLOMqgpLgFQlrD4Y9B9++KG63nwEIHkEtpFXPGPqJenp6iHK7rvv7kRRR5UkS4phGegleRw0GGZJgFBxDFGTOwWiIoBXv6ImQEyyi18DYAzyZQRNmBymw+Tae/311/O+whIgAQ1AxE6+8Oy8IxWwAPmHmSfzwRIgAQIQsUNuvCRBvOEBBxyQt0pLgJgJwBqWPMDk/Usa1OkVJ5jeDkuAmAnAyR3TZA1RE8Qk5bolQMwEyCfgqAc9/X3YHexB5EK+9oW5NcyuAiTHQYKzxA/cn0fsvhcuvfRSR4Xj1PHaQHrwwQdzXumGw4TdR0uAnCKIfxmYq3qSQvulRuf0MAEkrOu9zscTVhbWuWQ1QMxTQD4Vbwlg7gnMJ8sCf7caIK6bQ60NYEBJqwGsBrA2gEdyi9S3E2YVYvD9UcROAXYKUHXKUfdlPeRAzb2QNqSZXzE7BdgpwE4BdgrwviLN+gHk3KZC9pMYYW0AawNYG8D3AwvzBVo/gIHeskagNQKtEWiNQGsE+inLMFOQgQK2jiC7G2g9gbKrALsKsKuAKglYV7CLCmHmYLsMNLBC7DLQLgPtMtAuA+0y0C4DPSRgN4PsZlCNjgqePn26k7zSC+QSIDfAiBEjnJtT/MDFWF4p9w3MK9Mixd0N5HYtv0uQU1m+/W7n7N27t0g+GQZxOoK41IqzDV6YPXu2yPBRWVmpCRMmeJbhePtOO+2UkXMgTF99ni0uAcizQ0Yv9+ERsomSAJovZezYsU7+v3QgnL333tvzPsIgQoqTALvuuqvmzJkjEkGkgz6xvOTQCv0npxC3gbsBgcgDFDOKSwA6R2o30qykDpByzwBp5lKagbQopF5JXT3HZY19+/Z1MpGFxdlnn50zcRUEIfF1ocCOIZUL+QpIJkWfuNs4/bg8/SN/cteuXZ08QMuWLXPyHJI9ZP369YVWbfpc8QlAS/kSEBYXPHEayKvjFRUVTrZRfo8wRYqpoEKV42gbffS6aTT1Yn4ntyEnofyymoVqhPfDpUGAGDpmX2kmAUsAMzmVbSlLgLIdWrOOWQKYyalsS1kClO3QmnUsJwFIt3mu2XtsqRoqgXGSqp0s7ngAS4AaOqoBms3dPj1T5d0EGC0p++rPAG+3RUteAiMlDfQjwN8k/aPku2AbWKgEyKHfS9JYPwL8SdI0SZnXfxdanX2u1CSwQhJXrlcHZLingAaSZklqWWott+2JRAILJbELVX2jppsA1DJZUtdIqrMvKTUJMLYZefW9CNBOEsn2Mu9jLbWu2PYElcBySZ0l/Sf9QS8C8DtrxR5Ba7DlS1oCEyV1d7fQjwCUWyCpoqS7ZBtnKoFFVWO5IQgBaleRoIVpLbZcSUpgsSQubl7j1bpcGiBVngA27n7JvBu2JPtqG5UmAZZ8/5bUTdJaP8mYEIBn/yyJYDWY1ERSPSvqkpTAaklLJaHyR0n6V75WmhIg9Z5mklpLaiuplaRGkvAuNcxXkf09FgmslMQYcnXZvCofzlxJqH0jBCWA0UttoZojAUuAmjNWsbTUEiAWsdacl/4PE9eWF8lW1scAAAAASUVORK5CYII=',
	weather:'data:image/png;base64,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',
	weatherActive:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAALD0lEQVR4Xu2ddcw1RxWHn0KBUjQUaHBa3AkavJBQWgjursHdNbi2QGiwBHd3DRagQPBiwaF4CO5uecK8pHy5s7szu3Pv7uycf77ke8fOmd+dOXNs96PRqiWw36q5b8zTALByEDQANACsXAIrZ7+dAA0AK5fAytlvJ0ADwMolsHL22wnQALByCayc/XYCNACsXAIrZ7+dAA0AK5fAytlvJ0ADwMolsHL22wnQALByCayc/XYCNACsXAIrZ7+dAA0AK5fAytlvJ0ADwMolsHL22wnQALByCayc/bWfACcCzgocCpwOOAVwyoCJvwC/Bn4OHA/8FPhXbXhZGwDOARwGXB64HHA+4KQDN/WPwBeBTwPHAh8CfjOw72ybrQEA/rpvDtwAuMSEO/FP4CPAa4E3LBUMtQLAo/1awN2Ba0DxHMg/ByA8E/jyhCArPlRtAJCf6wOPBS5cXHqbJ3gn8CjgCzuaP2namgBwGeC5wCWTJFCu8cuAhwblsdwsI0euAQCnAZ4M3HULR32quH8LPAB4MfDv1M7baL90AFw23L3n3IawRszxduCOwC9GjFGk61IB4LrvBzwV2D9DMn8APgd8Fvgm8H3gJ4D/r0J34mAPOBVwZuA8wHmBSwMXzzxpfhheIs45G1oiAE4S7vo7JUrRDXgd8A7gE8A/EvvvNT8tcCXgRmFD9wxHQ4b7K3Dr8Gwc0r54m6UBQEvdW4CrJ0jmPcAxwPsB3+5T0oHADYEHJ7467gk8Z8qF5I61JAC4+e8CrjKQWTf84eGYH9glu5lyvGa4ki40cJQHAk8f2LZYs6UA4ORh8686QBLe5fcG3rwDzdvr6R7A4wD1hz66G/D8vkYl/74EAGjVezVw0wGCeFvQtn85oG3JJpqf1Tcu1TOJziUNV74SdkJLAIC/Ji1rfaTR5Wk7+NXH1qWT6RnhROha+58An7Nf6WOwxN/nDgDvVe/9Lvo7cCvg9SUENHJM5fuQYKjqGupbwYL5+5HzJXefMwAOBr4EnLGDK59yPsc8+udMWimf17NATce32zYTcwWA63JTr90jkFsG/WDbcsuZz2vM66yLrhPsFDnjZ/WZKwAURN+v+onAI7O43k0nZf0i4PYd0/8YOH+wSG5llXMEgMaVrwJG78Tog8DhCwzRkrfPABfs4O1JwCO2svuZNu3Sa9N7dnTHJHrYLgJo2l0iGafweUCbwSYyFvFcwTdRnL+5nQD+Qr4LqADGyCifPoWquOBGTvCU8DqIDaOZWHNxcZobAO4V7PYxxn0VGNc3tU2/uKD3mUAH0teBs3ScAl6BPyu9sDkBwLV496sExcg4v3eXFsqWxvck63II+Wp4Qum1zAkAVwA+1sGwv3598bOMrMnYKP0bxiGcIdL3B8AhpRXdXQDgZCEm/2JBGzbg4tTAlXuEqJFEY0lN9GjgMR0M6fn8aEmGtwWAA4DrBZOtHj2VvRTSRHomwOSMmkht/9sdDBVXBksDwOiZ+wT3rKlXufQS4A65nWfe75PBGbRpmd8LaWvFrr1SADCmTiXn8YBRu2NJl+lbxw4y0/56MY1qjtG5ge+UWnsJAJhv94oQQDnFuvX2HQRs3VM2xeIHjGGOojGKMTKa2LDyIjQ1AG4S7N0pgZJ9jPkyMAizVjJuwCzkmF5ksotRRkVoSgAYGGmY9tS0Vdv41IsfOJ4Zx4acb6KiP4CpAKBnzgDMVPoVoKJjmrU2cH8NmoG993wnS0cC700deGHtXwXcIrJm6xL4AipCUwDgQSEUa8gCDX9SmdPVK7IN4NxExgFqHzAZ41MVPv/25VlbgDaBGPmMNqdgchoLAHPu3zRgVf7CvR6MgF18UYUB/KY26TMLW8XEWIHJaQwAPKZNr9KK10UWUDBM21IrjTZL4DY9Vk5zDfSTTE65APCI9gj3CRMjQ5717um6LWbImFwiuxmw7yTVA3pciaXlAuAuPQkNbr5lWeYYqVtCjmPH1ExuyluMrHlgEMnklAMA3/hq7hpnYuQv/9mTr7beAf2xmPwSI0PIvlaC/RwAGOduREuM3ghoEGrH/vAd09DT9YMxcCT2Yho+y4aWqQAwjs1YvFjIluZan26+XRsNl4DGrod1NNc+okl8ckoFwHV7nDK+Zy3Q1ChNApaZM8ElRqa3e7KqeE96sqYCoGuhGip8r86uDEraXuyktVVKrELSR+oBelhNPJ2kamkKAHTxurn6+DeRFj7dto3SJKAynfqj0XtohZTRimEKAHRW6LSIkRkvL03jvbUGhmRBbRKUZnVB8JoxUkwBgJO9oGMyj7Cu8KYx66y5r0kwJsPk0qhKIykAsJzJ/SOr9P7Xnz3JvZQriYX2M1Wsr5BEH2vZNYdSAOBRc7PISr7RE8/fx8Ba/24ZGZ1jmtbHkC8DC2eZM5lEKQCwUIMFGzaRuoFVLhqlScA8QTOcVQIta+O/xkj45tfiatSw4fLmTPTtlVlEFwj9B6+ib9ATDiS6rhYZuWjUymBu6m2o59WgGy2sXaSOducUMaQAwCAONdZNpKNiLkWaU/hfWtu+SiPqYKbWWXJmEKUA4OWhyuWmgTUPn33QjK3RWAl4ZWgMilFSEGkKALrCllRCjOErErY0VmKV9bc2sp+uiRWZsH6CdZX+NoTvFABYp8/onhipBHYZioasp7UZJoE+m4zpdx8eMlQKAMxUtXhDjAwLP2rIpK3NaAmYUdxVO8ASM3oYeykFAA6mpc+nySYyx60rRKx3Ma1BkgRMHz9bpMcrO/S1/+uSCoBnhQDP2Eqt3bOTipdJoqujcVdSqRXSYzabUQAwONFI4Bj5UrhtHfKdPRcfD98/3LTQDwwtqZ96AtjeL17Evr/na0CvYRdIZi/ZhSzQGkMm4m4ig0duPISPVAA4ph9IcIIY+d08v+BlqlejMhIwU+h3HaXmjNnsCjH736pyAKDjwhj1i/ZcBZZ0mTR8qYwsFznqEYD3fIw0GRu91Us5AHBQ07X7atf4FU393A0EvduQ3KDLLK85+PQh5bx34FwAOPALw8cZuibRhaxzwq9xNZpGArp939cxlF8u7SuyPeoK2Ousu9Jghq66frY14NG4dzXTRuMkoPnXk7crKScpnX7MCSAr+rMNUBzyfRw/4mT4k27lpVf6HLeN6b3dJ7OHrBoWC8p1VPfiiinX7lgAOKkxAhZwiBU/3pddk0as9nlsyHg1zcyEEl8NTV/4r7RUtM26Ng7AWoF+a9C6il3kj8rQsqSPVk8BABdlnICJoBaBbLQbCWSVlp0KALKsB0rtdMh1sBsR1TurmcVmFiUH5U4JAMVrXqBGIn0CjbYjAZVrtf4sw9vUAJBlw8ONWLnvBNGu2xHhcmfxmW1CTnYgTgkA7IlTf4Fa/5CvfS53C3azcrOCTNP3VTBKcS4JgD3RHBYsgronx8a/70bc85pVZdvyssdPsaxtAGBvnZZ900btx54ExV4dwCn4qH0Mg26txmbY96TForYJgBNukoGNfl/X6lfWx7FKlqQW61cyRh1rFaBBOejt+1H4eKZh3kVksisAVLBHdbDQAFDHPmZz0QCQLbo6OjYA1LGP2Vw0AGSLro6ODQB17GM2Fw0A2aKro2MDQB37mM1FA0C26Oro2ABQxz5mc9EAkC26Ojo2ANSxj9lcNABki66Ojg0AdexjNhcNANmiq6NjA0Ad+5jNRQNAtujq6NgAUMc+ZnPRAJAtujo6NgDUsY/ZXDQAZIuujo4NAHXsYzYXDQDZoqujYwNAHfuYzUUDQLbo6ujYAFDHPmZz0QCQLbo6Ov4HoZd/kGXhXRQAAAAASUVORK5CYII=',
	read:'data:image/png;base64,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',
	setting:'data:image/png;base64,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'
}


export default icons;