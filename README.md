# Hissan Aero – Your Trusted Partner in Aviation Supply

Based in Ajman, UAE, we specialize in the supply of high-quality aircraft consumables, rotables, expendables, tools, and equipment. Our commitment to excellence and industry expertise ensures that you receive the reliable and efficient service you need to keep your fleet in top condition. Whether you're looking for essential consumables or specialized tools, we have you covered.

- **Your One-Stop Aviation Supply Partner**
- **Quality Assured, Prompt Delivery**
- **Explore Our Products & Services**

---

### Framer Motion `Error`

The error occurs because `framer-motion@11.11.13` has a peerOptional dependency on React 18, while your project is using a release candidate of React 19. Framer Motion is not yet fully compatible with React 19, so npm is blocking the installation due to the conflict.

Here are ways to resolve this:

1. Use `--legacy-peer-deps Option`
   This option allows npm to ignore peer dependency conflicts, which should let you install Framer Motion with React 19:

```bash
npm install framer-motion@latest --legacy-peer-deps
```
