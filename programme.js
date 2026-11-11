window.ADU_PROGRAMME = (function () {
  var R = String.raw;

  var rooms = {
    "EA.2.13": { label: "EA.2.13", color: "green", note: "Main lecture room" },
    "EA.2.21": { label: "EA.2.21", color: "orange", note: "Parallel session A" },
    "EA.2.22": { label: "EA.2.22", color: "yellow", note: "Parallel session B" },
    "EA.2.30": { label: "EA.2.30", color: "lilac", note: "Morning & afternoon tea" },
    "EHa.1.30": { label: "EHa.1.30", color: "red", note: "AAG Meeting" },
    "Sahra": { label: "Sahra By The River", color: "amber", note: "Conference dinner" },
    "EB.G.18": { label: "EB.G.18", color: "sky", note: "Friday lecture room" },
    "EB.G.21": { label: "EB.G.21", color: "mint", note: "Friday tea" }
  };

  var talks = [
    /* ---------------- Monday ---------------- */
    {
      id: "I1", day: 0, kind: "Invited", num: 1, start: "9:30", end: "10:25", room: "EA.2.13", pdfPage: 3,
      title: "Zappa-Szep products of categories and their homology",
      speaker: "Aidan Sims",
      authors: "Aidan Sims<sup>1</sup>",
      coauthors: "Alexander Mundey<sup>2</sup>",
      affiliations: ["University of New South Wales", "Adelaide University"],
      abstract: R`Zappa-Szep products of groups generalise semidirect products to the situation where each group acts on the other. By analogy, one can make sense of a Zappa-Szep product of categories. This captures many interesting constructions including, for example, self-similar actions. The analogy with products suggests an analogue of the Kunneth formula for computing homology of these structures. I’ll outline how to prove such a theorem and how to use it to compute homology in a key class of examples.`
    },
    {
      id: "I2", day: 0, kind: "Invited", num: 2, start: "11:00", end: "11:55", room: "EA.2.13", pdfPage: 3,
      title: "Positive Bases and Invariant Cones for Symmetric Group Representations",
      speaker: "Tom Goertzen",
      authors: "Tom Goertzen<sup>1</sup>",
      coauthors: "Geordie Williamson",
      affiliations: ["University of Sydney"],
      abstract: R`The irreducible representations of the symmetric group over characteristic 0 have been classified since the seminal work of Frobenius, Schur and Young. When representing elements as matrices, we need to pick a basis. Various bases are well understood such as Young’s seminormal basis. However, the relationships between other natural bases such as the Kazhdan—Lusztig, Springer or $p$-canonical bases remain subtle.

In this talk, we explore a common framework for comparing these bases. In particular, in all the bases above the matrices of the operators $1+s$ for a simple reflection $s$ have only non-negative entries. Hence, we can view these bases as spanning a proper cone that is invariant under the operators $1+s$.

We study the moduli space of all such bases which are related by a unitriangular base change (relative to a fixed ordered basis) over the real numbers. It turns out that this moduli space is a semi-algebraic compact set. Among the basic constructions, we will see various properties of this moduli space and how the bases above sit inside it. Moreover, we raise several open questions. At the end, I will briefly mention similar considerations for Lie algebra representations and representations in other types.

This talk is based on joint work with Geordie Williamson.`
    },
    {
      id: "C1", day: 0, kind: "Contributed", num: 1, start: "12:00", end: "12:25", room: "EA.2.21", pdfPage: 4,
      title: "The Scale of (P)-closed Groups Acting On Trees",
      speaker: "Marcus Chijoff",
      authors: "Marcus Chijoff<sup>1</sup>; Michal Ferov<sup>2</sup>; Stephan Tornier<sup>1</sup>",
      affiliations: ["The University of Newcastle, Australia", "University of South Bohemia in České Budějovice"],
      abstract: R`A group acting on a tree satisfies Tits’ independence property $(P)$ if, whenever a subset of the tree is stabilised, the action of the group on the “branches” from the subset are independent from each other. Reid-Smith recently developed graph-based combinatorial structures called local action diagrams to parametrise closed groups acting on trees satisfying property $(P)$. They showed that isomorphism classes of local action diagrams are in a one-to-one correspondence with conjugacy classes of closed groups acting on trees satisfying property $(P)$.

Properties of group corresponding to a local action diagram can be determined from the local action diagram itself. When the group is a totally disconnected locally compact group one property of interest is the values of the scale function. We show how the scale of translations can be determined from a groups local action diagram and use this to show when the group is unimodular and uniscalar.`
    },
    {
      id: "C2", day: 0, kind: "Contributed", num: 2, start: "12:00", end: "12:25", room: "EA.2.22", pdfPage: 4,
      title: "The general linear groupoid of a Leavitt path algebra",
      speaker: "Raimund Preusser",
      authors: "Raimund Preusser<sup>1</sup>",
      affiliations: ["Nanjing University of Information Science and Technology"],
      abstract: R`The general linear groupoid of a Leavitt path algebra $L$ is isomorphic to the groupoid whose objects are all modules of the form $\bigoplus_{i=1}^{n} v_i L$, where each $v_i$ is a vertex, and whose morphisms are all isomorphisms between these modules. In this talk, I will present a generating set for the general linear groupoid of a Leavitt path algebra of a finite graph. This result yields generators for all general linear groups over the Leavitt path algebra, including the group of invertible elements. I will also discuss an extension of this result to Leavitt path algebras of finite hypergraphs (which embrace the Leavitt path algebras of finite separated and vertex-weighted graphs, as well as all Leavitt algebras $L(m,n)$).`
    },
    {
      id: "C3", day: 0, kind: "Contributed", num: 3, start: "12:30", end: "12:55", room: "EA.2.21", pdfPage: 4,
      title: "The p-local structure of algebraic groups of type A and finite classical groups",
      speaker: "Shuanyang Hu",
      authors: "Shuanyang Hu<sup>1</sup>",
      affiliations: ["University of Auckland"],
      abstract: R`The $p$-radical subgroups of classical groups play an important role in the study of the finite simple groups and their covering groups. One approach to classify $p$-radical subgroups of a (finite) group is by its maximal-proper $p$-local subgroups. In this talk, we characterize the $p$-local subgroups of $\mathrm{PGL}_n$ and derive the characterization of all of the maximal-proper $p$-local subgroups of algebraic groups of type A, which are used to determine and understand those of the corresponding finite groups.`
    },
    {
      id: "C4", day: 0, kind: "Contributed", num: 4, start: "12:30", end: "12:55", room: "EA.2.22", pdfPage: 5,
      title: "Strong Gradings on Weighted Leavitt Path Rings",
      speaker: "Niña Jeane Adolfo",
      authors: "Alfilgen Sebandal<sup>1</sup>; Johan Öinert<sup>2</sup>; Lyster Rey Cabardo<sup>3</sup>; Niña Jeane Adolfo<sup>3</sup>",
      affiliations: ["Linnaeus University", "Blekinge Institute of Technology", "Mindanao State University-Iligan Institute of Technology"],
      abstract: R`Leavitt path algebras associate algebraic structures to directed graphs. Weighted Leavitt path rings broaden this construction by assigning positive integer weights to the edges. When all edge weights are equal to one, the weighted Leavitt path ring coincides with the corresponding Leavitt path algebra, which we refer to as the unweighted Leavitt path ring. The weighted setting also accommodates the more general Leavitt algebras $L(m,n)$. Both unweighted and weighted Leavitt path rings admit a natural $\mathbb{Z}$-grading, in which vertices have degree 0, edges have degree 1, and ghost edges have degree $-1$. A graded ring $L = \bigoplus_{n \in \mathbb{Z}} L_n$ is strongly graded if $L_m L_n = L_{m+n}$ for all $m, n \in \mathbb{Z}$.

In this talk, we describe when the natural $\mathbb{Z}$-grading of a weighted Leavitt path ring is strong and how this property is reflected in the structure of the underlying weighted graph. Using that strong $\mathbb{Z}$-gradedness for weighted Leavitt path rings can be determined through the condition $L_1 L_{-1} = L_0 = L_{-1} L_1$, we obtain several characterizations for row-finite weighted graphs involving the behavior of sources and sinks. These results show that the introduction of edge weights changes the strong-grading behavior of Leavitt path algebras.`
    },
    {
      id: "I3", day: 0, kind: "Invited", num: 3, start: "2:00", end: "2:55", room: "EA.2.13", pdfPage: 5,
      title: "The Tannakian Moduli Machine",
      speaker: "Daniel Chan",
      authors: "Daniel Chan<sup>1</sup>",
      affiliations: ["UNSW, Sydney"],
      abstract: R`The geometry of quiver representations can be thought of as a machine for generating moduli problems. They are interesting since they relate geometry to algebra and so provide modular interpretations of notions such as derived equivalences. However, interesting Deligne-Mumford stacks do not arise from this machine. In this talk, inspired by Tannakian duality, we introduce a variant of the quiver moduli machine dubbed the Tannakian duality machine which embellishes quiver representations with monoidal category data. This is joint work with Tarig Abdelgadir and Joe Baine.`
    },
    {
      id: "I4", day: 0, kind: "Invited", num: 4, start: "3:30", end: "4:25", room: "EA.2.13", pdfPage: 6,
      title: "Automorphism groups of vertex operator algebras",
      speaker: "Chongying Dong",
      authors: "Chongying Dong<sup>1</sup>",
      affiliations: ["University of California Santa Cruz"],
      abstract: R`This talk will report recent progress on the study of the Galois group $\mathrm{Gal}(A/V)$ for a vertex operator algebra $A$ and a conformal subalgebra $V$. We prove that if $V$ is a nice VOA, then $\mathrm{Gal}(A/V)$ is a finite group. Moreover, each element of $\mathrm{Gal}(A/V)$ can be realized explicitly through certain $A$-module categories in a categorical setting.`
    },
    {
      id: "C5", day: 0, kind: "Contributed", num: 5, start: "4:30", end: "4:55", room: "EA.2.21", pdfPage: 6,
      title: "Toward post-quantum cryptography using diagram monoids and their representations",
      speaker: "Matthias Fresacher",
      authors: "Matthias Fresacher<sup>1</sup>",
      affiliations: ["Western Sydney University"],
      abstract: R`Public-key cryptography began in 1976 with Diffie-Hellman key exchange, but many number-theoretic schemes are vulnerable to Shor’s algorithm. Hence scalable quantum computers would force a shift to different foundations. While post-quantum candidates exist, many proposed platforms monoids still admit linear algebra attacks. This motivates looking for platform monoids with large non-trivial representations, usually measured by their Representation Gap (RepGap).

This talk presents recent work in exploring diagram monoids as platform monoids. Specifically whether the semigroup theoretical notion of twisted products in the sense of East, Gray, Muhammed and Ruškuc can modify diagram monoids in ways that increase their RepGap and what structural features control this. Along the way, semigroup theoretic byproducts are established including that ‘tightness’ is a natural canonical property of a twisting.

This is ongoing joint work with Willow Stewart and Daniel Tubbenhauer.`
    },
    {
      id: "C6", day: 0, kind: "Contributed", num: 6, start: "4:30", end: "4:55", room: "EA.2.22", pdfPage: 7,
      title: "The Sarkisov program for mildly noncommutative surfaces",
      speaker: "Dominic Matan",
      authors: "Dominic Matan<sup>1</sup>",
      affiliations: ["UNSW Sydney"],
      abstract: R`The minimal model program tells us that to classify varieties of a given dimension we should first find some best representatives in each birational class. These representatives need not be unique, so the next question is how they relate to one another. For Mori fibre spaces, the Sarkisov program answers this: any two in the same birational class are connected by a sequence of elementary birational maps called Sarkisov links. In this talk, we will see how this extends to terminal orders on surfaces, which are mildly noncommutative analogues of smooth surfaces. As an application, we will construct division algebras over function fields of surfaces with the smallest possible $\mathbb{C}$-automorphism group.`
    },
    {
      id: "C7", day: 0, kind: "Contributed", num: 7, start: "5:00", end: "5:25", room: "EA.2.21", pdfPage: 7,
      title: "The Complexity of the Epimorphism Problem for the Bicyclic Monoid",
      speaker: "Luka Carroll",
      authors: "Luka Carroll<sup>1</sup>",
      coauthors: "Murray Elder<sup>1</sup>",
      affiliations: ["University of Technology Sydney"],
      abstract: R`The bicyclic monoid (or bicyclic semigroup) $B$ is the infinite monoid on two generators $a, b$ subject only to the relation $ab = 1$. The monoid $B$ is a fundamental algebraic structure that has found numerous applications in algebra, combinatorics, and theoretical computer science. The monoid $B$ is an inverse monoid; that is, $B$ is a monoid in which every $x \in B$ has a unique generalised inverse $x^{-1} \in B$, meaning $x^{-1}$ satisfies only the identities $xx^{-1}x = x$ and $x^{-1}xx^{-1} = x^{-1}$ rather than the stronger identity $xx^{-1} = x^{-1}x = 1$ satisfied by group inverses.

In this talk we consider the computational complexity of the epimorphism problem for the bicyclic monoid. This is the problem of deciding if there exists a surjective homomorphism from an arbitrary, finitely presented inverse monoid $M$ onto the bicyclic monoid (or, equivalently, if $M$ has a quotient that is isomorphic to $B$). We analyse this problem via a reduction to Presburger arithmetic, the first-order theory of linear arithmetic over the integers. Through this analysis we gain new insights into the complexity of an extension of Presburger arithmetic. This is joint work with Murray Elder.`
    },
    {
      id: "C8", day: 0, kind: "Contributed", num: 8, start: "5:00", end: "5:25", room: "EA.2.22", pdfPage: 7,
      title: "A new slice of Schottky Space",
      speaker: "Akito Koike",
      authors: "Akito Koike<sup>1</sup>",
      affiliations: ["The University of Sydney"],
      abstract: R`Fractal curves on the plane can be obtained as limit sets of Schottky groups. Coarse properties of the space of all Schottky groups are well understood since the 1970s through work of Jorgensen, Marden and Maskit. Recent theoretical and computational advances allow a finer study of Schottky space, and helped understand the groups and limit sets associated with 2-dimensional slices in the 6-dimensional space of all 2-generator Schottky groups.

This talk describes a new slice of Schottky space, motivated by McMullen’s three circle family. This family gives rise to a natural configuration of circles and Möbius transformations. We look at the corresponding limit sets, and the associated Hausdorff dimensions. A broader investigation of the slice is obtained by further developing methods of Gilman and Waterman.`
    },

    /* ---------------- Tuesday ---------------- */
    {
      id: "I5", day: 1, kind: "Invited", num: 5, start: "9:30", end: "10:25", room: "EA.2.13", pdfPage: 9,
      title: "A sharp bound for permutation closures of multiple context-free languages",
      speaker: "Murray Elder",
      authors: "Murray Elder<sup>1</sup>; Andrew Duncan; Lisa Frenkel",
      affiliations: ["University of Technology Sydney"],
      abstract: R`Let $S_n$ be the symmetric group on $n$ letters. Let $C$ be some class of formal languages, for example regular, context-free, multiple context-free, etc.

Problem: if $L \subseteq \Sigma^*$ is a language in $C$, what kind of language is the $n$-permutation closure $\{w_{\sigma(1)} \cdots w_{\sigma(n)} \mid w_1 \cdots w_n \in L,\ w_i \in \Sigma^*,\ \sigma \in S_n\}$?

For $k$-multiple context-free languages, we proved (with Mengfan Lyu) that the $n$-permutation closure is $k'$-multiple context-free, for some value of $k' \geq k$. In this work we address the question, how low can $k'$ go?

This is joint work with Andrew Duncan and Lisa Frenkel.`
    },
    {
      id: "I6", day: 1, kind: "Invited", num: 6, start: "11:00", end: "11:55", room: "EA.2.13", pdfPage: 9,
      title: "Exponential genericity of WPD elements in acylindrically hyperbolic groups",
      speaker: "Wenyuan Yang",
      authors: "Wenyuan Yang<sup>1</sup>",
      affiliations: ["Peking University"],
      abstract: R`In this talk, we prove that WPD elements in an acylindrically hyperbolic group are exponentially generic for every finite generating set. As applications, we establish the growth tightness and co-growth tightness of this class of groups. This is a joint work with Lihuang Ding (Queens U).`
    },
    {
      id: "C9", day: 1, kind: "Contributed", num: 9, start: "12:00", end: "12:25", room: "EA.2.21", pdfPage: 9,
      title: "Tilings of symmetric and alternating groups by conjugacy classes",
      speaker: "Gabor Somlai",
      authors: "Binzhou Xia<sup>1</sup>; Gabor Somlai<sup>1</sup>; Sanming Zhou<sup>1</sup>",
      affiliations: ["The University of Melbourne"],
      abstract: R`A pair $(X, Y)$ of subsets of a finite group $G$ is called a <em>tiling</em> of $G$ if every element of $G$ can be written uniquely in the form $xy$, where $x \in X$ and $y \in Y$. In this case, each of $X$ and $Y$ is a tile of $G$. Rothaus and Thompson, and later Fang and Xia studied whether the set of transpositions is a tile of $S_n$. Despite these works, this case remains open in $S_n$, except when $n$ satisfies certain non-divisibility conditions.

We show that any conjugacy class of the symmetric group other than the trivial class and the class of transpositions does not tile the group. In the case of the alternating group, we also show that no normal set not containing the identity element tiles the group. We exclude some of the conjugacy classes using elementary combinatorial methods. However, for certain conjugacy classes containing elements of order two, this method does not work, so we rule those out using classical representation theory methods.

This is joint work with Binzhou Xia and Sanming Zhou.`
    },
    {
      id: "C10", day: 1, kind: "Contributed", num: 10, start: "12:00", end: "12:25", room: "EA.2.22", pdfPage: 10,
      title: "Weak-Target Categories and Self-Similar Actions",
      speaker: "Isaac Bankier",
      authors: "Isaac Bankier<sup>1</sup>",
      affiliations: ["Macquarie University"],
      abstract: R`We introduce a new type theoretic generalisation of a category, known as a weak-target category. After recalling the relevant background, we show that weak-target categories are equivalent to matched pairs of groupoids and categories in the sense of [MS25]. We show also that weak-target categories are equivalent to a polynomial comonad on the category of groupoids. Inspired by these equivalences, we give a new notion of morphism between matched pairs and two notions of a presheaves of matched pairs.`,
      refs: [R`[MS25] A. Mundey and A. Sims, Homology and twisted $C^*$-algebras for self-similar actions and Zappa-Szép products, Results in Mathematics 80 (2025), Paper No. 9, 72.`]
    },
    {
      id: "C11", day: 1, kind: "Contributed", num: 11, start: "12:30", end: "12:55", room: "EA.2.21", pdfPage: 10,
      title: "Commensurability of Droms right-angled Artin groups",
      speaker: "Vandit Trivedi",
      authors: "Vandit Trivedi<sup>1</sup>",
      affiliations: ["Australian National University"],
      abstract: R`A right-angled Artin group (RAAG) is defined by a finite, simplicial graph in which a vertex corresponds to a generator and an edge corresponds to a commuting relation between a pair of generators. Droms RAAGs are those RAAGs for which every finitely generated subgroup is also a RAAG. In this talk, we classify the commensurability classes of Droms RAAGs.`
    },
    {
      id: "C12", day: 1, kind: "Contributed", num: 12, start: "12:30", end: "12:55", room: "EA.2.22", pdfPage: 11,
      title: "There’s A Comonad On The Symmetric Algebra",
      speaker: "Jerry Zhang",
      authors: "Jean-Simon Lemay<sup>1</sup>; Jerry Zhang<sup>2</sup>",
      affiliations: ["Macquarie University", "UNSW"],
      abstract: R`For the module $X$ over the commutative ring $R$, its symmetric algebra is given explicitly as
$$\mathsf{Sym}X = \bigoplus_{n=0}^{\infty} \mathsf{Sym}_n X \qquad \mathsf{Sym}_n X \text{ the symmetrised tensor of degree } n;$$
which alongside a sensible assignment on morphisms comprises an endofunctor $\mathsf{Sym}$ on the category of $R$-modules. It is well-known that by virtue of the universal property of the symmetric algebra — as the free commutative $R$-algebra of $X$ — there exists a monad on the symmetric algebra endofunctor. Briefly, a monad consists of an endofunctor $T$, and natural transformations $\mu : \mathsf{Sym}\mathsf{Sym}X \to \mathsf{Sym}X$ and $\eta : X \to \mathsf{Sym}X$ satisfying coherence requirements akin to a monoid.

The purpose of this talk is to demonstrate the existence of a <strong>co</strong>monad $(\mathsf{Sym}, \delta, \epsilon)$ on the symmetric algebra. By a comonad, we of course mean a structure formally dual to monads. But unlike its counterpart, the comonad does not arise from the common coalgebraic structure of the symmetric algebra. Instead given by more complex maps, seen from the comonad comultiplication
$$\delta : \mathsf{Sym}X \to \mathsf{Sym}\mathsf{Sym}X \qquad x_1 \ldots x_n \mapsto \sum_{[n] := A_1 | \ldots | A_k} x_{A_1} \ldots x_{A_k}$$
sending a symmetrised tensor to the sum of all finite partitions delimited by the external tensor of $\mathsf{Sym}\mathsf{Sym}X$. And the comonad counit
$$\epsilon : \mathsf{Sym}X \to X \qquad x_1 \ldots x_n \mapsto \begin{cases} x_1 & \text{if } n = 1, \\ 0 & \text{otherwise.} \end{cases}$$
which preserves tensors of degree one.

Although we may reason about this comonad through a strictly combinatorial lens, the method we detail in this talk contrasts the monad. We will completely characterise this comonad through another universal property exhibited by the symmetric algebra: in which actions of $\mathsf{Sym}X$ correspond to actions of the mere object $X$. This notion, termed <strong>algebraically-free</strong>, allows us to construct maps $\mathsf{Sym}X \to B$ by specifying the $X$-action $\beta : B \otimes X$ on objects; so in particular,
$$\mathsf{D}_X : \mathsf{Sym}\mathsf{Sym}X \otimes X \to \mathsf{Sym}\mathsf{Sym}X \qquad \mathsf{n}_X : (R \oplus X) \otimes X \to R \oplus X$$
are the actions which derive our respective comonad maps.

This extension onto the actions of objects therefore allows us to further generalise the symmetric algebra, such that we may identify this comonad structure in other symmetric monoidal categories, on their algebraically-free commutative monoids.

This is joint work with Jean-Simon Pacaud Lemay.`
    },
    {
      id: "I7", day: 1, kind: "Invited", num: 7, start: "2:00", end: "2:55", room: "EA.2.13", pdfPage: 12,
      title: "An ESN-style theorem for a large class of biunary semigroups",
      speaker: "Tim Stokes",
      authors: "Tim Stokes<sup>1</sup>",
      affiliations: ["University of Waikato"],
      abstract: R`The <em>ESN Theorem</em> is a famous result for inverse semigroups that shows how to view any inverse semigroup as a special kind of ordered category. Central to this is the use of domain and range operations ($D(s) = ss'$, $R(s) = s's$), in terms of which the category can be defined.

Generalising, here we are interested in biunary semigroups $(S, \cdot, D, R)$ that can be made into categories $(S, \circ, D, R)$ by defining $s \circ t = st$ but only when $R(s) = D(t)$. When does the structure of the category $(S, \circ, D, R)$ together with some additional relational information (typically, one or two partial orders) capture the original semigroup? For a given class of biunary semigroups, can we describe the corresponding class of small categories?

Lawson completed this project for Ehresmann semigroups in [L1991]. Every inverse semigroup is Ehresmann, and indeed the semigroup of binary relations $R(X)$ on a set $X$ is Ehresmann, with $D(s), R(s)$ the identities on the domain and image of $s \in R(X)$.

Lawson defined two partial orders $\leq_r, \leq_l$ on the Ehresmann semigroup $S$:
$$s \leq_r t \Leftrightarrow s = D(s)t, \quad s \leq_l t \Leftrightarrow s = tR(s).$$
Lawson was able to capture the structure of the Ehresmann semigroup $(S, \cdot, D, R)$ using the biordered category $(S, \circ, D, R, \leq_r, \leq_l)$. This means almost all the products in $S$ can be “thrown away” as long as these two partial orders are retained. He also axiomatised the biordered categories so arising, thereby obtaining an “ESN theorem” generalising the original.

Following various other generalisations, a unifying generalisation involving <em>DRC-semigroups</em> was given in [EFMS2026], where partial orders can be defined generalising those above. DRC-semigroups generalise Ehresmann semigroups, and include all $*$-regular semigroups. But in this more general setting, more information must be retained in the category: the structure of the <em>projections</em> $D(S) = \{D(s) \mid s \in S\}$, along with some additional category-theoretic structure.

Here, we give a much simpler version of ESN theorem for DRC-semigroups, using $\leq_r$ and $\leq_l$ defined exactly as above, although these fail to be partial orders in general but can still be described axiomatically. In fact, the class of biunary semigroups considered is larger than DRC-semigroups, and includes localisable semigroups as in [FK2021] which have no useful partial orders.`,
      refs: [
        R`[EFMS2026] J. East, M. Fresacher, P.A. Azeef Muhammed and T. Stokes, <em>Categorical representation of DRC-semigroups</em>, J. Algebra <strong>691</strong> (2026), 230–291.`,
        R`[FK2021] D.G. FitzGerald and M.K. Kinyon, <em>Trace- and pseudo-products: restriction-like semigroups with a band of projections</em>, Semigroup Forum <strong>103</strong> (2021), 848–866.`,
        R`[L1991] M.V. Lawson, <em>Semigroups and ordered categories I: the reduced case</em>, J. Algebra <strong>141</strong> (1991), 422–462.`
      ]
    },
    {
      id: "I8", day: 1, kind: "Invited", num: 8, start: "3:30", end: "4:25", room: "EA.2.13", pdfPage: 12,
      title: "Zhang twists of Leavitt path algebras",
      speaker: "Giang Nam Tran",
      authors: "Giang Nam Tran<sup>1</sup>",
      affiliations: ["Institute of Mathematics, Vietnam Academy of Science and Technology"],
      abstract: R`Zhang twist of a graded algebra has played an important role in the interaction of noncommutative algebra with noncommutative algebraic geometry. In this talk, we present recent results on Zhang twists of Leavitt path algebras.`
    },
    {
      id: "C13", day: 1, kind: "Contributed", num: 13, start: "4:30", end: "4:55", room: "EA.2.21", pdfPage: 13,
      title: "What the talented monoid of a graph can see",
      speaker: "Rafael Borges de Souza",
      authors: "Rafael Borges de Souza<sup>1</sup>; Roozbeh Hazrat<sup>2</sup>; Anthony Warwick",
      affiliations: ["Federal University of Santa Catarina", "Western Sydney University"],
      abstract: R`The talented monoid $T_E$ is a graded invariant associated with a directed graph $E$, arising naturally from the graded structure of the Leavitt path algebra $L_K(E)$. It can be realized as the monoid of graded finitely generated projective $L_K(E)$-modules and viewed as a graded analogue of the graph monoid $M_E$. In this work, we investigate how order-theoretic properties of $T_E$ reflect structural and dynamical features of the underlying graph. We establish connections between properties of the talented monoid and graph-theoretic features, including cycles, exits and periodicity. We then explore the extent to which $T_E$ can detect finer features of the graph that are not captured by the ordinary graph monoid $M_E$. In particular, we investigate whether and how properties of $T_E$ can be used to detect infinite emitters.`
    },
    {
      id: "C14", day: 1, kind: "Contributed", num: 14, start: "4:30", end: "4:55", room: "EA.2.22", pdfPage: 13,
      title: "Lie Semigroups with Applications to Markov Embedding",
      speaker: "Julian Stratemeier",
      authors: "Julian Stratemeier<sup>1</sup>",
      affiliations: ["University of Tasmania"],
      abstract: R`The theory of Lie groups - groups which are smooth manifolds - is a long-established and rich theory with applications in physics, differential equations, and control theory. Associated to each Lie group $G$ is its Lie algebra $\mathfrak{g} = L(G)$, the tangent space at the identity equipped with a bilinear Lie bracket $[\cdot,\cdot]$. The Lie algebra describes the local structure of the group, with the bracket encoding the group multiplication via the BCH product.

Interestingly, there exists a lesser-known theory of Lie semigroups [HHL1989,HN1993], which studies certain closed subsemigroups $S \subseteq G$ through their associated tangent cone (Lie wedge) $L(S) \subseteq L(G)$.

This talk will introduce Lie semigroup theory and present our application to the classical Markov embedding problem, which asks to characterise the subset of stochastic matrices that can arise as transition matrices of a continuous-time Markov chain - a class of stochastic model ubiquitous in the sciences. Having shown that embeddable subsets form Lie semigroups, we will exploit existing theory to answer the question: when do time-inhomogeneous and time-homogeneous Markov chains generate the same set of transition matrices? This leads us to study Lie semialgebras: the remarkable tangent cones which are locally closed under the BCH product.

This research project is supervised by Jeremy Sumner and Luke Yates at the University of Tasmania.`,
      refs: [
        R`[HHL1989] Hilgert, Hofmann, and Lawson, Lie groups, convex cones, and semigroups, Oxford mathematical monographs (1989).`,
        R`[HN1993] Hilgert and Neeb, Lie Semigroups and their Applications, Springer Berlin Heidelberg 1552 (1993).`
      ]
    },
    {
      id: "C15", day: 1, kind: "Contributed", num: 15, start: "5:00", end: "5:25", room: "EA.2.21", pdfPage: 14,
      title: "The maximal dimensions of path and graph algebras",
      speaker: "Łukasz Kaczmarczyk",
      authors: "Elisabeth A. Pacheco<sup>1</sup>; Mateusz Lowiel<sup>2</sup>; Piotr M. Hajac<sup>3</sup>; Łukasz Kaczmarczyk<sup>4</sup>",
      affiliations: ["Western Sydney University", "Warsaw University", "IMPAN", "Uniwersytet Warszawski"],
      abstract: R`This talk will focus on directed graphs and algebras associated to them.

It will present the recent results concerning the following questions:

- Given an acyclic directed graphs $E = (E^0, E^1, s, t)$ with no isolated vertices and $N > 0$ edges, what is the maximal possible dimension of its Path Algebra $\mathbb{K}E$?
- Given an acyclic directed graphs $E = (E^0, E^1, s, t)$ with no isolated vertices and $N > 0$ edges, what is the maximal possible dimension of its Leavitt Path Algebra $L_{\mathbb{K}}(E)$?

They provide not only the answer to the question of dimension, but also provide a graph for which the maximum is achieved, which come from a certain class of graphs with nice combinatorial properties.

The talk is based on a joint work with P. M. Hajac, M. Lowiel and E. A. Pacheco.`
    },
    {
      id: "C16", day: 1, kind: "Contributed", num: 16, start: "5:00", end: "5:25", room: "EA.2.22", pdfPage: 14,
      title: "Infinite non-uniform random graphs",
      speaker: "Agnieszka Widz",
      authors: "Agnieszka Widz<sup>1</sup>",
      affiliations: ["Institute of Mathematics of the Polish Academy of Sciences"],
      abstract: R`Let’s imagine a countable set of vertices and suppose that for each pair of vertices, we flip a coin to decide whether there is an edge between those two vertices or not. The classical result proved by Erdős and Reni states that almost always, the result of this operation is the same graph, known as the random graph. This graph forms a beautiful structure and is surprisingly ubiquitous. However, it has also been quite well studied and well known. In a paper with Ziemowit Kostana and Jarosław Swaczyna, we describe graphs that are also generated by coin flips but are not isomorphic to the Rado graph. We describe their properties and characterize them by a certain structural property.`
    },

    /* ---------------- Wednesday ---------------- */
    {
      id: "I9", day: 2, kind: "Invited", num: 9, start: "9:30", end: "10:25", room: "EA.2.13", pdfPage: 16,
      title: "Fraisse limits of direct powers of simple algebras",
      speaker: "Nik Ruškuc",
      authors: "Nik Ruškuc<sup>1</sup>; Peter Mayr<sup>2</sup>",
      affiliations: ["University of St Andrews", "University of Colorado"],
      abstract: R`Fraisse theory, at the interface between model theory, combinatorics and algebra, can be viewed as considering all the ways in which structures of a certain type embed into each other, and encoding this in a single infinite highly symmetrical infinite object, called the Fraisse limit. The best known example is perhaps the random graph, which is the Fraisse limit of all finite graphs. Closer to the topic of this conference is the Hall group, which is the limit for the class of all finite groups. It turns out that if one considers direct powers of a finite simple algebra and and their embeddings, it also often leads to a limit. Here algebra means any algebraic structure, such as group, semigroup, ring, module, lattice, etc.; and simple means no proper quotients/homomorphic images. In the talk I will:

- introduce certain conditions which ensure that such a limit exists;
- discuss the nature of the limit, which often (but not always) turns out to be a filtered Boolean power over the Cantor space;
- discuss some related properties, such as Bergman property, small index property, ample generics and Ramsey property.

This is ongoing joint work with Peter Mayr from the University of Colorado at Boulder.`
    },
    {
      id: "I10", day: 2, kind: "Invited", num: 10, start: "11:00", end: "11:25", room: "EA.2.13", pdfPage: 16,
      title: "Growth and identities of Rees quotients of inverse semigroups defined by positive relators",
      speaker: "David Easdown",
      authors: "David Easdown<sup>1</sup>",
      affiliations: ["University of Sydney"],
      abstract: R`We discuss growth and identities of finitely presented Rees quotients of free inverse semigroups defined by positive relators. Proofs rely on a new sufficient condition for a set of reduced words to freely generate an inverse subsemigroup of a free inverse semigroup, and a variation of Dickson’s (or Higman’s) Lemma, which tells us that divisibility of monomials is Noetherian. This is joint work with Lev Shneerson.`
    },
    {
      id: "C17", day: 2, kind: "Contributed", num: 17, start: "11:30", end: "11:55", room: "EA.2.21", pdfPage: 17,
      title: "p-Quasi-Frobenius Rings",
      speaker: "Theophilus Gera",
      authors: "Theophilus Gera<sup>1</sup>",
      affiliations: ["Sardar Vallabhbhai National Institute of Technology"],
      abstract: R`Quasi-Frobenius (QF) rings are characterized by a striking interaction between finiteness conditions and injectivity. We develop a principal endomorphism-theoretic framework that replaces artinianity by chain conditions on endomorphism images and kernels, and self-injectivity by principal injectivity. A ring is called $p$-quasi-Frobenius if it is two-sided endoartinian (equivalently, two-sided perfect) and two-sided principally injective. The framework builds on the endochain conditions developed in recent work of Gera, Patel, and Gupta [GPG2026].

We then introduce $p$-Johns rings, the principal analogues of Johns rings, and obtain several consequences for classical QF problems. In particular, every two-sided $p$-Johns ring is $p$-quasi-Frobenius. For principal two-sided ideal rings, this yields an equivalence between being QF, being $p$-quasi-Frobenius, and being two-sided $p$-Johns. We also prove that a semiprimary principal right ideal ring which is right principally injective and right Kasch is $p$-quasi-Frobenius; with the corresponding left principal ideal hypothesis, the ring is QF. Thus we obtain principal analogues of the Faith–Menal and Faith conjectures. Further results connect $p$-Johns rings with CF conditions and give a principal analogue of the FGF phenomenon.

The generalization is strict: $p$-quasi-Frobenius rings can have infinite Loewy width and may exhibit nonreflexive cyclic modules, failure of Auslander-Bridger duality, and infinite projective and injective dimensions. These examples show both the structural strength and the genuinely new behavior of the $p$-quasi-Frobenius framework.

This is joint work with Manoj Kumar Patel, Amit Sharma, and Pramod Kanwar.`,
      refs: [R`[GPG2026] T. Gera, M. K. Patel, A. J. Gupta. On endoartinian and endonoetherian modules, accepted Commun. Algebra (2026) arXiv:2510.14477 [math.RA].`]
    },
    {
      id: "C18", day: 2, kind: "Contributed", num: 18, start: "11:30", end: "11:55", room: "EA.2.22", pdfPage: 17,
      title: R`The Green ring of the Hopf algebra $\mathfrak{u}(\mathfrak{m})$`,
      speaker: "Dirceu Bagio",
      authors: "Dirceu Bagio<sup>1</sup>",
      coauthors: "Daiana Flores; Saradia Flora; Nicolás Andruskiewitsch",
      affiliations: ["Federal University of Santa Catariana"],
      abstract: R`Let $\Bbbk$ be an algebraically closed field of characteristic 2 and $\mathfrak{s}$ the unique, up to isomorphism, not restricted simple Lie algebra of dimension 3 over $\Bbbk$ which has basis $\{e, h, f\}$ and bracket $[e, f] = h$, $[e, h] = e$ and $[f, h] = f$. The 2-closure $\mathfrak{m}$ of $\mathfrak{s}$ (that is, $\mathfrak{m}$ is the smallest restricted Lie algebra that contains $\mathfrak{s}$) is a 5-dimensional Lie algebra and its restricted enveloping algebra $\mathfrak{u}(\mathfrak{m})$ is generated by $e, f, h$ with defining relations
$$ef + fe = h, \qquad eh + he = e, \qquad fh + hf = f, \qquad e^4 = f^4 = 0, \qquad h^2 + h = 0.$$
It was proven in [ABFF2025] that $\mathfrak{u}(\mathfrak{m})$ is special biserial and hence it is of tame representation type [CB1995]. The finite-dimensional indecomposable $\mathfrak{u}(\mathfrak{m})$-modules are string or band modules. This new approach allows us to calculate the Green ring of $\mathfrak{u}(\mathfrak{m})$. This is a joint work with N. Andruskiewitsch, S. D. Flora and D. Flôres.`,
      refs: [
        R`[ABFF2025] N. Andruskiewitsch, D. Bagio, S. Della Flora and D. Flôres. <em>On the Drinfeld double of the restricted Jordan plane in characteristic 2.</em> J. Pure Appl. Algebra <strong>229</strong> (2025), no. 1, 107798.`,
        R`[CB1995] W. Crawley-Boevey. <em>Tameness of biserial algebras.</em> Arch. Math. <strong>65</strong>, 399-407 (1995).`
      ]
    },
    {
      id: "C19", day: 2, kind: "Contributed", num: 19, start: "12:00", end: "12:25", room: "EA.2.21", pdfPage: 18,
      title: "Radicals of rings of formal power series",
      speaker: "Barry Gardner",
      authors: "Elena Cojuhari; Barry Gardner",
      affiliations: [],
      abstract: R`We consider various aspects of the interaction between radicals and power series rings, e.g. when does a radical class $\mathcal{R}$ satisfy one of the following?

(i) $A \in \mathcal{R} \Rightarrow A[[X]] \in \mathcal{R}$;<br>(ii) $\mathcal{R}(A) = 0 \Rightarrow \mathcal{R}(A[[X]]) = 0$;<br>(iii) $(\forall A)\ \mathcal{R}(A[[X]]) = \mathcal{R}(A)[[X]]$.

Here (i) and (ii) are jointly equivalent to (iii). Some of our results make use of properties of additive groups of rings, e.g. cotorsion groups.`
    },
    {
      id: "C20", day: 2, kind: "Contributed", num: 20, start: "12:00", end: "12:25", room: "EA.2.22", pdfPage: 18,
      title: "The Lie Group-Lie Algebra Correspondence in Tangent Categories",
      speaker: "Marcello Lanfranchi",
      authors: "Marcello Lanfranchi<sup>1</sup>",
      affiliations: ["Macquarie University"],
      abstract: R`Classic Lie theory establishes a correspondence between Lie groups, which are internal group objects in the category of smooth manifolds, and Lie algebras. An analogous correspondence also exists for group objects in affine schemes. Both smooth manifolds and affine schemes form tangent categories, which provide a categorical context for differential geometry. In this talk, we show how the Lie correspondence can be constructed entirely from the tangent structure. We define Lie groups in a tangent category and construct the internal Lie algebra as the representing object of a certain functor. Lastly, we show that our construction generalizes the usual Lie correspondence in both differential and algebraic geometry.`
    },
    {
      id: "I11", day: 2, kind: "Invited", num: 11, start: "2:00", end: "2:55", room: "EA.2.13", pdfPage: 18,
      title: "Injective modules over Leavitt path algebras",
      speaker: "Francesca Mantese",
      authors: "Francesca Mantese<sup>1</sup>",
      affiliations: ["University of Verona"],
      abstract: R`Leavitt path algebras have a well-studied, extremely tight relationship with their projective modules. On the other hand, very little is known so far about the structure of their injective modules. In a joint project with Gene Abrams and Alberto Tonolo we intend to study indecomposable injective modules over a Leavitt path algebra $L_K(E)$, for an arbitrary direct graph $E$ and a field $K$. In this talk I will present two significative constructions that for a relevant class of algebras lead to complete description of the injective envelopes of simple modules: the Prüfer-type modules, obtained as direct limits of uniserial finite length modules, and extensions of modules via ‘’formal power series”. This is joint work with Gene Abrams and Alberto Tonolo.`
    },
    {
      id: "I12", day: 2, kind: "Invited", num: 12, start: "3:30", end: "4:25", room: "EA.2.13", pdfPage: 19,
      title: "Finite symmetric tensor categories",
      speaker: "Kevin Coulembier",
      authors: "Johannes Flake<sup>1</sup>; Kevin Coulembier<sup>2</sup>",
      affiliations: ["Bonn University", "University of Sydney"],
      abstract: R`A finite symmetric tensor category is a finite $k$-linear abelian category with rigid symmetric monoidal structure and simple unit object. If we let $k$ be an algebraically closed field of characteristic zero, it is known by classical work of Deligne that the only such categories are representation categories of finite groups, up to a twist in the braiding. In positive characteristic, the situations is predictably much more complicated, but a corresponding classification has been finalised this year, by completing a line of research initiated by Victor Ostrik for the special case of symmetric fusion categories.`
    },
    {
      id: "C21", day: 2, kind: "Contributed", num: 21, start: "4:30", end: "4:55", room: "EA.2.21", pdfPage: 19,
      title: "A characterisation for the category of Hilbert spaces",
      speaker: "Shay Tobin",
      authors: "Shay Tobin<sup>1</sup>; Steve Lack<sup>1</sup>",
      affiliations: ["Macquarie University"],
      abstract: R`The categories of real and of complex Hilbert spaces with bounded linear maps have received purely categorical characterisations by Chris Heunen and Andre Kornell. These characterisations are achieved through Solèr’s theorem, a result which shows that certain orthomodularity conditions on a Hermitian space over an involutive division ring result in a Hilbert space with the division ring being either the reals, complexes or quaternions. The characterisation by Heunen and Kornell makes use of a monoidal structure, which in turn excludes the category of quaternionic Hilbert spaces. We provide an alternative characterisation without the assumption of monoidal structure on the category. This new approach not only gives a new characterisation of the categories of real and of complex Hilbert spaces, but also the category of quaternionic Hilbert spaces.`
    },
    {
      id: "C22", day: 2, kind: "Contributed", num: 22, start: "4:30", end: "4:55", room: "EA.2.22", pdfPage: 20,
      title: "A fibre-wise description of the power graph of $S_n$",
      speaker: "V Aruna",
      authors: "V Aruna<sup>1</sup>; Krishnan Paramasivam<sup>1</sup>; Peter J Cameron<sup>2</sup>",
      affiliations: ["National Institute of Technology Calicut", "University of St Andrews"],
      abstract: R`The power graph of a group encodes the power relations among its elements. In this talk, we study the power graph $P(S_n)$ of the symmetric group through the natural maps
$$P(S_n) \longrightarrow \widetilde{P}(S_n) \longrightarrow T(S_n),$$
where $\widetilde{P}(S_n)$ is the quotient power graph obtained by identifying elements that generate the same cyclic subgroup, and $T(S_n)$ is the type graph determined by cycle types. We first focus on the fibres of these maps and describe the adjacency relations between fibres corresponding to distinct cyclic subgroups and then we examine how these fibres are organised according to cycle type and how their interplay reflects on the structure of the original power graph. This fibre-wise approach provides a hierarchical description of $P(S_n)$ and shows how its structure can be reconstructed from cyclic-subgroup and cycle-type data.

This is a joint work with my Ph.D. supervisor, Dr. Krishnan Paramasivam, Department of Mathematics, National Institute of Technology Calicut, India, and Prof. P. J. Cameron, Emeritus Professor, School of Mathematics and Statistics, University of St Andrews, UK.`
    },
    {
      id: "C23", day: 2, kind: "Contributed", num: 23, start: "5:00", end: "5:25", room: "EA.2.21", pdfPage: 20,
      title: "Derived equivalences of finite-dimensional algebras and noncommutative projective schemes",
      speaker: "Jackson Ryder",
      authors: "Jackson Ryder<sup>1</sup>",
      affiliations: ["UNSW Sydney"],
      abstract: R`A well-known result of Beilinson establishes an equivalence between the derived categories of coherent sheaves on $\mathbb{P}^n$ and of finitely generated modules over a finite-dimensional algebra. Similar derived-equivalences have since been constructed for various projective schemes and finite-dimensional algebras, leading to a natural question: which finite-dimensional algebras are derived-equivalent to a projective scheme? We give a partial answer with one important caveat: the corresponding projective schemes are noncommutative!

We show that every bimodule species of infinite representation type is derived-equivalent to the “noncommutative Proj” of its preprojective algebra; extending a result of Minamoto for path algebras of quivers. Over a perfect field, this encompasses all hereditary finite-dimensional algebras of infinite representation type. The key ingredient in this result is a new characterisation of the categories of coherent sheaves on large class of noncommutative projective schemes. We will discuss how this characterisation works, as well as how we can use it to construct the “noncommutative Proj” of a preprojective algebra and the aforementioned derived-equivalences.`
    },
    {
      id: "C24", day: 2, kind: "Contributed", num: 24, start: "5:00", end: "5:25", room: "EA.2.22", pdfPage: 21,
      title: "Representations of Coxeter groups in the imaginary cone",
      speaker: "Yuchun He",
      authors: "Yuchun He<sup>2</sup>",
      coauthors: "Lawrence Reeves<sup>1</sup>; Linxiao Xu; Xiang Fu<sup>2</sup>",
      affiliations: ["School of Mathematics and Statistics University of Melbourne", "Beijing International Center for Mathematical Research Peking University"],
      abstract: R`In this paper we introduce a novel construction of root systems for infinite non-affine Coxeter groups of finite rank. In the traditional approach, the root system $\Phi$ for a Coxeter system $(W, R)$ arises from the Tits representation, in which the abstract Coxeter group $W$ is mapped isomorphically into a subgroup of the general linear group of a finite-dimensional real vector space $V$ generated by reflections, which are special orthogonal transformations relative to a symmetric bilinear form $(\cdot,\cdot)$. The roots, which are the elements of $\Phi$, are representative normal vectors to the reflecting hyperplanes of these reflections. Various generalizations of this construction are well studied in the literature, and in almost all of these, a prototype of $\Phi$ is invariantly defined to be a $W$-stable subset of $V$ consisting of discrete vectors having the property that $(x, x) > 0$ for each $x \in \Phi$. In most constructions, these values are precisely 1. Here we introduce an entirely different approach to construct root systems for arbitrary infinite non-affine Coxeter groups $W$ of finite rank, still in the same space $V$, in which the analogue of roots are no longer discrete vectors in $V$ but suitably chosen hyperplanes in the so-called imaginary cone of $W$ in $V$, where $(u, v) \leq 0$ for any pair of vectors $u, v$ in this imaginary cone. Thus this new hyperplane prototype root system and the traditional root systems are separated by the isotropic set of the bilinear form $(\cdot,\cdot)$. We show that this new prototype of root system preserves most of the properties enjoyed in the traditional root system while at the same time literally exhibiting all the properties of the so-called walls corresponding to roots in geometric group theory. We also show that in rank 3, these new hyperplane prototypes of root systems possess natural asymptotic behaviours, and such asymptotic behaviours coincide with those introduced by Hohlweg et al. upon suitable projection and normalization. Strikingly, both models of asymptotic behaviour lead to the same limits in the isotropic set. This is a joint work with my supervisor Fu Xiang, Lawrence Reeves and Xu Linxiao.`
    },

    /* ---------------- Thursday ---------------- */
    {
      id: "I13", day: 3, kind: "Invited", num: 13, start: "9:30", end: "10:25", room: "EA.2.13", pdfPage: 22,
      title: "Graphs on groups (and other algebras)",
      speaker: "Peter J. Cameron",
      authors: "Peter J. Cameron<sup>1</sup>",
      affiliations: ["University of St Andrews"],
      abstract: R`This topic began with the paper of Brauer and Fowler in 1955, showing that there are only finitely many finite simple groups with a given involution centralizer (perhaps the first step to the Classification of Finite Simple Groups). They didn’t use the term “graph”, but their proof used the commuting graph of the group, in which two elements are joined if they commute.

Since then, many further graphs have been defined using group-theoretic properties, including the power graph, nilpotency graph and generating graph.

I will mainly be concerned with what groups and graphs can say to each other, under three heads: using graphs to get new results about groups, or to define interesting classes of groups; and using groups to construct beautiful graphs.

Some of the constructions generalize, essentially unchanged, to arbitrary (universal) algebras. Surprisingly, some of the results extend to this more general context; others point to possibly interesting conditions on algebras.`
    },
    {
      id: "I14", day: 3, kind: "Invited", num: 14, start: "11:00", end: "11:55", room: "EA.2.13", pdfPage: 22,
      title: "Fusion Actions and Categorical Orbifolds",
      speaker: "Li Ren",
      authors: "Li Ren<sup>1</sup>",
      affiliations: ["Sichuan University"],
      abstract: R`I will discuss our recent investigation into the generalized symmetries of condensable algebras in modular tensor categories. The main results include Schur–Weyl duality, Galois correspondence, and generalized orbifold theory for vertex operator algebras. This is joint work with Chongying Dong, Siu-Hung Ng, and Feng Xu.`
    },
    {
      id: "I15", day: 3, kind: "Invited", num: 15, start: "12:00", end: "12:25", room: "EA.2.13", pdfPage: 22,
      title: "Enumerating minimal generating sets and Cayley graphs",
      speaker: "Rhys Evans",
      authors: "Rhys Evans<sup>1</sup>",
      affiliations: ["The University of Sydney"],
      abstract: R`Describing highly symmetrical discrete objects in terms of finite groups and generating sets can make their exhaustive enumeration feasible. Minimal Cayley graphs, defined by inclusion-minimal generating sets, provide natural test cases for questions about Hamiltonicity and chromatic number. In this talk, I will describe how pruning an orderly generation algorithm using the Frattini quotient enables the enumeration of minimal generating sets for groups of much larger order. Using this approach, we enumerated 4,608,079,361 minimal generating sets of groups of order at most 511, from which we constructed a census of 33,645,009 minimal Cayley graphs.

The census reveals patterns that are difficult to see from individual examples. In particular, when $n = pq$ for primes $p < q$, we determine the proportion of arc-transitive minimal Cayley graphs with $n$ vertices exactly, obtaining either $1/2$ or an explicit formula in $p$. Every graph in the census is also Hamiltonian, and we intend to use these computations and the underlying algorithm to find infinitely many more integers $n$ such that every Cayley graph with $n$ vertices is Hamiltonian. I will also discuss some open questions suggested by the census data.

This is based on joint work with Primož Potočnik and Kolja Knauer.`
    },
    {
      id: "C25", day: 3, kind: "Contributed", num: 25, start: "12:30", end: "12:55", room: "EA.2.13", pdfPage: 23,
      title: "Automorphisms of Kimura Hadamard Matrices",
      speaker: "Santiago Barrera Acevedo",
      authors: "Santiago Barrera Acevedo<sup>1</sup>",
      affiliations: ["La Trobe University"],
      abstract: R`A Hadamard matrix (HM) of order $n$ is an $n \times n$ matrix with entries in $\{\pm 1\}$ whose rows are pairwise orthogonal. HMs occur naturally in combinatorics, coding theory, and design theory. In 1994, Kimura discovered a HM of order 28 with a remarkable structure arising from a dihedral group, giving rise to a class now known as Kimura Hadamard matrices (KHMs). These are HMs of order $4(2k+1)$ built from a bordered $4 \times 4$ block array whose blocks are defined by four subsets of the dihedral group $D_{2k}$ of order $2k$. Kimura and Niwasaki found examples for odd $k$, many arising from $y$-invariant subsets (subsets invariant under conjugation by a fixed reflection $y \in D_{2k}$).

In this talk, we explore the algebraic structure of KHMs through their automorphism groups. In particular, we show that the automorphism group of a classical KHM contains a subgroup isomorphic to $D_{2k} \times Q_8$, and discuss how additional symmetries can arise. We then illustrate how these symmetries can be exploited to construct further examples. Finally, we discuss recent computational approaches and constructions using quaternary Legendre pairs, including examples with even values of $k$.

This talk is based on joint work with Melissa Lee and later investigations with Heiko Dietrich.`
    },
    {
      id: "I16", day: 3, kind: "Invited", num: 16, start: "2:00", end: "2:55", room: "EA.2.13", pdfPage: 23,
      title: "Regular Graphs with given Automorphism Groups",
      speaker: "Reymond Akpanya",
      authors: "Reymond Akpanya<sup>1</sup>",
      affiliations: ["University of Sydney"],
      abstract: R`A classical theorem of Frucht states that every finite group occurs as the automorphism group of a finite graph. In this talk, we prove an embedded analogue for regular graphs of every degree at least three. In particular, for every integer $d \geq 3$ and every finite group $G$, there exists a $d$-regular graph $\Gamma$ together with a strong embedding $\beta$ into a closed surface such that $\mathrm{Aut}(\Gamma) \cong \mathrm{Aut}(\beta, \Gamma) \cong G$. Along the way, we identify an oversight in Sabidussi’s classical construction of regular graphs with prescribed automorphism groups. We give an alternative construction that resolves this issue and strengthens Sabidussi’s result by producing graphs that admit proper $d$-edge-colourings preserved by every graph automorphism.

This is joint work with Meike Weiß (RWTH Aachen) and Tom Goertzen (University of Sydney).`
    },
    {
      id: "I17", day: 3, kind: "Invited", num: 17, start: "3:30", end: "4:25", room: "EA.2.13", pdfPage: 24,
      title: "Graphs Associated with Finite-Dimensional Lie Algebras",
      speaker: "Intan Muchtadi-Alamsyah",
      authors: "Afsaneh Shamsaki<sup>1</sup>",
      coauthors: "Ahmad Erfanian<sup>1</sup>; Gantina Rachmaputri<sup>2</sup>; Intan Muchtadi-Alamsyah<sup>3</sup>",
      affiliations: ["Ferdowsi University of Mashhad, Iran", "Institut Teknologi Bandung, Indonesia", "Institut Teknologi Bandung"],
      abstract: R`Graphs associated with Lie algebras provide a combinatorial approach to studying commutation and centralizer structure. This talk discusses three constructions for finite-dimensional Lie algebras over finite fields: the non-commuting graph, the g-noncommuting graph, and a graph whose vertices are noncentral subalgebras, with adjacency determined by a nonzero bracket.

We present degree formulas in terms of centralizers and fibres of adjoint maps, together with results on graph structure and invariants. Examples from two-dimensional nonabelian Lie algebras, Heisenberg algebras, and a four-dimensional nilpotent Lie algebra illustrate the transition from elements to subalgebras. These examples show how algebraic properties determine combinatorial features and suggest further questions about recovering algebraic information from the associated graphs.

This is joint work with Afsaneh Shamsaki, Gantina Rachmaputri, and Ahmad Erfanian.`
    },
    {
      id: "C26", day: 3, kind: "Contributed", num: 26, start: "4:30", end: "4:55", room: "EA.2.13", pdfPage: 24,
      title: "The elementary linear groups of ample groupoids",
      speaker: "Jianchao Wu",
      authors: "Jianchao Wu<sup>1</sup>",
      coauthors: "Zichen Zhang<sup>1</sup>",
      affiliations: ["Fudan University"],
      abstract: R`We introduce the concept of elementary linear groups associated to ample groupoids, and prove, under a mild nondegeneracy condition, that these groups admit Kazhdan’s property (T), a fundamental concept of rigidity in group theory. This allows us to produce an abundance of simple non-sofic property (T) groups. This is joint work with Zichen Zhang.`
    },
    {
      id: "C27", day: 3, kind: "Contributed", num: 27, start: "5:00", end: "5:25", room: "EA.2.13", pdfPage: 25,
      title: "Poset block structures and generalized wreath products",
      speaker: "Rosemary Bailey",
      authors: "Rosemary Bailey<sup>1</sup>",
      affiliations: ["University of St Andrews"],
      abstract: R`If a finite transitive permutation group is imprimitive, it preserves a non-trivial partition of the underlying set. The set of all invariant partitions forms a lattice. If two further conditions hold (1, the relations commute pairwise; 2, the lattice is distributive) then the group acts on a poset block structure (a concept from the design of experiments), so the group is embeddable in a generalized wreath product. These concepts will be explained in the talk. This work extends the famous theorem of Krasner and Kaloujnine on wreath products.

This is joint work with Marina Anagnostopoulou-Merkouri and Peter Cameron.`
    },

    /* ---------------- Friday ---------------- */
    {
      id: "I18", day: 4, kind: "Invited", num: 18, start: "9:30", end: "10:25", room: "EB.G.18", pdfPage: 26,
      title: "Subshift Algebras: Partial Actions, Conjugacy, and the Socle",
      speaker: "Daniel Gonçalves",
      authors: "Daniel Gonçalves<sup>1</sup>",
      affiliations: ["Universidade Federal de Santa Catarina"],
      abstract: R`We discuss a family of algebras associated with one-sided subshifts over arbitrary, possibly infinite, alphabets. These algebras generalize graph and Leavitt path algebras and admit realizations as partial skew group rings. We explain how the associated commutative subalgebras naturally give rise to the subshifts of Ott–Tomforde–Willis and how algebraic properties can be used to study conjugacy. We then describe the minimal left ideals and the socle of a subshift algebra, showing that the socle is graded isomorphic to a Leavitt path algebra. This provides new algebraic invariants for distinguishing subshifts.`
    },
    {
      id: "I19", day: 4, kind: "Invited", num: 19, start: "11:00", end: "11:55", room: "EB.G.18", pdfPage: 26,
      title: "The Lord of the Moves",
      speaker: "Piotr M. Hajac",
      authors: "Piotr M. Hajac<sup>1</sup>",
      affiliations: ["IMPAN, Warsaw"],
      abstract: R`Combinatorics of graphs is a very powerful tool to unravel various properties of graph algebras. In particular, isomorphisms between graph algebras are often implemented by moves between their graphs. In this talk, I will review the landscape of Middle-earth of graph moves to show how to make these combinatorial methods functorial. Our categorical approach not only reveals the relationship between moves, but also leads to unexpected extensions of known moves (shifts and reductions) and the characterization of out-splits as admissible epimorphisms admitting a lifting of the source map. The former allows us to go beyond isomorphisms and Morita equivalences, and the latter yields a factorization lemma for out-splits. Better still, the functorial understanding of maximal out-splits permits combining them with the derived-graph construction, which results in computing new proper endomorphisms of Cuntz algebras. Finally, the functorial implementation of balanced in-splits requires the construction of a new category of graphs, where morphisms are given as homomorphisms of graph inverse semigroups. Thus, the combinatorics of moves brings a new tool to the realm of noncommutative topology where directed graphs are viewed as quantum spaces. Time permitting, I will end the talk discussing our new quest to find one move to rule them all.

This is joint work with G. G. de Castro, M. Lowiel, E. A. Pacheco, and J. R. R. Tolkien.`
    },
    {
      id: "I20", day: 4, kind: "Invited", num: 20, start: "12:00", end: "12:55", room: "EB.G.18", pdfPage: 27,
      title: "Quantum elliptic cohomology",
      speaker: "Y.-P. Lee",
      authors: "Y.-P. Lee<sup>1</sup>",
      affiliations: ["Academia Sinica (Institute of Mathematics)"],
      abstract: R`Among the generalized cohomology theories associated with 1-dimensional groups are ordinary cohomology (additive group), complex K-theory (multiplicative group), and elliptic cohomology (elliptic curve). In the late 1980s and early 1990s, physicists initiated quantum cohomology (Gromov-Witten theory) as the enumerative geometry associated with ordinary cohomology. A decade later, A. Givental and I introduced quantum K-theory. In this talk I will present a rigorous mathematical framework for quantum elliptic cohomology. This is based on joint work with E. Bouaziz and I. Huq-Kuruvilla.`
    },
    {
      id: "I21", day: 4, kind: "Invited", num: 21, start: "2:00", end: "2:55", room: "EB.G.18", pdfPage: 27,
      title: "Symbolic dynamics and graph algebras",
      speaker: "Adam Dor-On",
      authors: "Adam Dor-On<sup>1</sup>",
      coauthors: "Boris Bilich<sup>2</sup>; Efren Ruiz<sup>3</sup>",
      affiliations: ["University of Haifa", "University of Haifa & University of Gottingen", "University of Hawai’i at Hilo"],
      abstract: R`Symbolic dynamics provides simple yet surprisingly rich models for dynamical systems, though many fundamental classification problems remain unresolved. A central example of this is the conjugacy problem for subshifts of finite type (SFTs), whose complexity is reflected in deep links to combinatorics and matrix theory. Building on the seminal work of Cuntz and Krieger, one can associate graph C*-algebras and Leavitt path algebras to SFTs in a way that recovers classical invariants of the dynamics, while also producing new algebraic obstructions to conjugacy.

In this talk, I will present recent advances in understanding the relationship between symbolic dynamics and graph algebras, including a resolution of Hazrat’s graded classification conjectures, which we refute by way of showing that conjugacy of SFTs coincides with graded Morita equivalence of the associated Leavitt path algebras. These results illustrate how graph algebras, in both the analytic and purely algebraic settings, not only encapsulate longstanding problems in symbolic dynamics but also open new avenues at the interface of functional analysis, pure algebra, and quantum mathematics.

The proofs of the new results on the graded classification conjectures were AI assisted.`
    },
    {
      id: "C28", day: 4, kind: "Contributed", num: 28, start: "3:30", end: "3:55", room: "EB.G.18", pdfPage: 27,
      title: "Characterizing (Co)Free Dagger Categories",
      speaker: "JS Lemay",
      authors: "JS Lemay<sup>1</sup>",
      affiliations: ["Macquarie University"],
      abstract: R`Dagger categories are the multiobject version of involutive monoids, in short they are categories with an involution operator which swaps the direction of the arrows. For any category there is both a free dagger category and a cofree dagger category over it. A natural question to ask is: given a dagger category, how can we tell if it is free or cofree without specifying an external base category? In this talk, I will describe characterizations of both free dagger categories and cofree dagger categories via internal dagger category structure. For cofree dagger categories, this characterization is given via enrichment over rectangular bands. For free dagger categories, this characterization is given via a zigzag decomposition. This talk is based on arXiv.2609.14285`
    },
    {
      id: "C29", day: 4, kind: "Contributed", num: 29, start: "4:00", end: "4:25", room: "EB.G.18", pdfPage: 28,
      title: "Free algebras in some locally finite varieties of reducts of Heyting algebras: a generic method",
      speaker: "Tomasz Kowalski",
      authors: "Tomasz Kowalski<sup>1</sup>; Katarzyna Słomczyńska<sup>2</sup>",
      affiliations: ["Jagiellonian U., Kraków, Poland", "U. of the National Education Commission, Poland"],
      abstract: R`Heyting algebras are the second, after Boolean algebras, most famous class of algebras with obvious connections to logic. None of the operations of Heyting algebras (except the constant 1), in the signature $(\wedge, \vee, \to, 0, 1)$ is term-definable from the others, so it is natural to consider reducts, and indeed subreducs, for these tend to form varieties. Of particular interest are subreducts to the signatures: $(\to, 1)$, known as <em>Hilbert algebras</em>; $(\to, 0, 1)$, known as <em>Hilbert algebras with zero</em>; $(\wedge, \to, 1)$, known as <em>Brouwerian semilattices</em>; $(\wedge, \to, 0, 1)$, known as <em>Brouwerian semilattices with zero</em>. All of these, unlike Heyting algebras, are locally finite, so constructing free finitely generated algebras is clearly of interest.

Some such constructions exist, a number of them quite old: de Bruijn [B1975] gives a syntactic construction applicable to Brouwerian semilattices and (in principle) to Hilbert algebras, which is then partly used in Köhler [K1981] to construct 3-generated free Brouwerian semilattice: it has $623\,662\,965\,552\,330$ elements. Independently, Krzystek [K1977] constructs the same (the numbers agree).

We give a uniform method of building the free $n$-generated algebra in an arbitrary subvariety $\mathcal{V}$ of Hilbert algebras and Brouwerian semilattices, with or without zero. Our method is universal-algebraic: we build the free algebra $\mathbf{F}_{\mathcal{V}}(X)$ out of its ordered set of completely meet-irreducible congruences, which in turn is determined by the subdirectly irreducible algebras in $\mathcal{V}$. If subdirectly irreducible algebras in $\mathcal{V}$ admit an effective description, our method is algorithmic [KS2026]. Turned into a C progam (with a little help of you-know-who) it yields numbers. For example, the free 3-generated Hilbert algebra with zero has $12\,290 \cdots \approx 10^{647}$ elements; in the subvariety <em>of width 2</em> of Hilbert algebras with zero, the free 4-generated algebra has $19\,182 \cdots \approx 10^{1208}$ elements.`,
      refs: [
        R`[B1975] N. G. de Bruijn. Exact finite models for minimal propositional calculus over a finite alphabet. Technical Report EUT Report 75-WSK-02, Eindhoven University of Technology, Eindhoven, The Netherlands, 1975.`,
        R`[K1981] P. Köhler. Brouwerian semilattices. <em>Trans. Amer. Math. Soc.</em>, 268(1):103–126, 1981.`,
        R`[K1977] P. S. Krzystek. On the free relatively pseudocomplemented semilattice with three generators. <em>Rep. Math. Logic</em>, (9):31–38, 1977.`,
        R`[KS2026] T. Kowalski and K. Słomczyńska. A generic construction of free algebras in varieties of Hilbert algebras and Brouwerian semilattices. arXiv:2607.18852`
      ]
    },
    {
      id: "C30", day: 4, kind: "Contributed", num: 30, start: "4:30", end: "4:55", room: "EB.G.18", pdfPage: 29,
      title: "Data provenance through the eyes of algebra and relevant logic",
      speaker: "Marcel Jackson",
      authors: "Marcel Jackson<sup>1</sup>",
      affiliations: ["La Trobe University"],
      abstract: R`Data provenance concerns extension of the Boolean true-false model for database queries to more expressive languages that record not just the existence of solutions but features such as the range of solutions, their source, their robustness and so on. From an algebraic perspective, a semiring supplants the usual true-false Boolean algebra as the apparatus measuring truth, with different varieties of semirings capturing different powers of provenance detection. “Lineage provenance” for example, captures the ability to identify the subset of records that are relevant to a database query, and the semiring semantics are multiplicatively commutative and idempotent.

Relevant logic is a non-classical logic where the truth of implications depends on the degree to which the antecedent is relevant to the consequent. The logical semantics are again semirings.

In this talk we show how to translate relevant logic to lineage provenance, and then explore the algebraic properties of “lineage semirings”, focussing in particular on the operation of monus, which has previously been used to provide a form of negation in semiring-based truth semantics.`
    }
  ];

  /* Timetable rows. type: event | plenary | parallel | break
     - plenary/parallel reference talk ids.
     - label: shown for events and breaks. */
  var days = [
    {
      name: "Monday", short: "Mon", date: "16 November", iso: "2026-11-16",
      rooms: ["EA.2.13", "EA.2.30", "EA.2.21", "EA.2.22"],
      rows: [
        { type: "event", start: "8:30", end: "9:00", label: "Registration", room: null, tone: "grey" },
        { type: "event", start: "9:00", end: "9:30", label: "Opening", room: "EA.2.13" },
        { type: "plenary", talk: "I1" },
        { type: "break", start: "10:30", end: "11:00", label: "Morning Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I2" },
        { type: "parallel", talks: ["C1", "C2"] },
        { type: "parallel", talks: ["C3", "C4"] },
        { type: "break", start: "1:00", end: "2:00", label: "Lunch", room: null, tone: "plum" },
        { type: "plenary", talk: "I3" },
        { type: "break", start: "3:00", end: "3:30", label: "Afternoon Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I4" },
        { type: "parallel", talks: ["C5", "C6"] },
        { type: "parallel", talks: ["C7", "C8"] }
      ]
    },
    {
      name: "Tuesday", short: "Tue", date: "17 November", iso: "2026-11-17",
      rooms: ["EA.2.13", "EA.2.30", "EA.2.21", "EA.2.22"],
      rows: [
        { type: "plenary", talk: "I5" },
        { type: "break", start: "10:30", end: "11:00", label: "Morning Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I6" },
        { type: "parallel", talks: ["C9", "C10"] },
        { type: "parallel", talks: ["C11", "C12"] },
        { type: "break", start: "1:00", end: "2:00", label: "Lunch", room: null, tone: "plum" },
        { type: "plenary", talk: "I7" },
        { type: "break", start: "3:00", end: "3:30", label: "Afternoon Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I8" },
        { type: "parallel", talks: ["C13", "C14"] },
        { type: "parallel", talks: ["C15", "C16"] }
      ]
    },
    {
      name: "Wednesday", short: "Wed", date: "18 November", iso: "2026-11-18",
      rooms: ["EA.2.13", "EA.2.30", "EA.2.21", "EA.2.22", "EHa.1.30"],
      rows: [
        { type: "plenary", talk: "I9" },
        { type: "break", start: "10:30", end: "11:00", label: "Morning Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I10" },
        { type: "parallel", talks: ["C17", "C18"] },
        { type: "parallel", talks: ["C19", "C20"] },
        { type: "break", start: "12:30", end: "1:00", label: "Lunch", room: null, tone: "plum" },
        { type: "event", start: "1:00", end: "2:00", label: "AAG Meeting", room: "EHa.1.30" },
        { type: "plenary", talk: "I11" },
        { type: "break", start: "3:00", end: "3:30", label: "Afternoon Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I12" },
        { type: "parallel", talks: ["C21", "C22"] },
        { type: "parallel", talks: ["C23", "C24"] }
      ]
    },
    {
      name: "Thursday", short: "Thu", date: "19 November", iso: "2026-11-19",
      rooms: ["EA.2.13", "EA.2.30", "Sahra"],
      rows: [
        { type: "plenary", talk: "I13" },
        { type: "break", start: "10:30", end: "11:00", label: "Morning Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I14" },
        { type: "plenary", talk: "I15" },
        { type: "plenary", talk: "C25" },
        { type: "break", start: "1:00", end: "2:00", label: "Lunch", room: null, tone: "plum" },
        { type: "plenary", talk: "I16" },
        { type: "break", start: "3:00", end: "3:30", label: "Afternoon Tea", room: "EA.2.30" },
        { type: "plenary", talk: "I17" },
        { type: "plenary", talk: "C26" },
        { type: "plenary", talk: "C27" },
        { type: "event", start: "6:30", end: "9:00", label: "Conference Dinner", room: "Sahra" }
      ]
    },
    {
      name: "Friday", short: "Fri", date: "20 November", iso: "2026-11-20",
      rooms: ["EB.G.18", "EB.G.21"],
      rows: [
        { type: "plenary", talk: "I18" },
        { type: "break", start: "10:30", end: "11:00", label: "Morning Tea", room: "EB.G.21" },
        { type: "plenary", talk: "I19" },
        { type: "plenary", talk: "I20" },
        { type: "break", start: "1:00", end: "2:00", label: "Lunch", room: null, tone: "plum" },
        { type: "plenary", talk: "I21" },
        { type: "break", start: "3:00", end: "3:30", label: "Afternoon Tea", room: "EB.G.21" },
        { type: "plenary", talk: "C28" },
        { type: "plenary", talk: "C29" },
        { type: "plenary", talk: "C30" },
        { type: "event", start: "5:00", end: "5:30", label: "Closing", room: "EB.G.18" }
      ]
    }
  ];

  return {
    venue: "Western Sydney University, Parramatta South Campus",
    pdf: "assets/ADU_book_of_abstracts.pdf",
    pdfPageOffset: 6,
    rooms: rooms,
    talks: talks,
    days: days
  };
})();
