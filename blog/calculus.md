---
title: "Rendering math equations with KaTeX"
date: "2017-08-07"
draft: false
author: Daisy Buchanan
tags:
  - remark
  - math
  - KaTeX
---

[gatsby-remark-katex][1] adds math equation support to gatsby using
[remark-math][2] and [katex][3].

## Math Equations in Inline Mode

Surround your equation with `$` to generate a math equation in inline mode.

**Example markdown:**

```
$a^2 + b^2 = c^2$
```

**Example output:** $a^2 + b^2 = c^2$

## Math Equations in Display Mode

Surround your equation with `$$` and new-lines to generate a math equation in
display mode.

**Example markdown:**

```
$$
a^2 + b^2 = c^2
$$
```
haha this is a $\int_x f(x) dx $ integral
**Example output:**

$$
a^2 + b^2 = c^2
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$


$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$



haha afasfasdfsafa dfsadf adsfjasdfjsaf oas;dfasf j;safalsa f;jafu9fljl[0dafkjafu adjafj [j adsfa  asfa  afffjdaf  adfjfa fiaf]]
$$
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
$$

dsafkajf;lj[ adffj]
this is a 
$$
sin(x)^2
$$  
function de la function 








**Add Katex CSS to your template** Katex's CSS file is required to render the
formulas correctly. Include the CSS file in your template ([example][4])


