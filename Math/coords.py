import math


def castVect(x1, y1, x2, y2):
    return x2-x1, y2-y1

def addVect(*args):
    #Must have an even number of arguments
    if len(args)%2 != 0:
        args.pop()
    x = 0
    y = 0
    for i, a in enumerate(args):
        if i%2 == 0:
            x += a
        else:
            y += a
    return x, y

def vectNeg(x, y):
    return -x, -y

def vectLen(x, y):
    #solution for 3572
    return math.sqrt(x**2 + y**2)

def vectMul(x, y, n):
    #multiply a vector by a number
    return x*n, y*n

def scalarProd1(x1, y1, x2, y2):
    #used when vector coordinates are known
    return x1*x2 + y1*y2

def sinLaw(a=0, b=0, A=0, B=0):
    #arguments should be named
    #the one unnamed argument will be the one to solve for
    if a==0 :
        return b*math.sin(A)/math.sin(B)
    elif b==0 :
        return a*math.sin(B)*math.sin(A)
    elif A==0 :
        return math.asin(a*math.sin(B)/b)
    elif B==0 :
        return math.asin(b*math.sin(A)/a)

def vectAngle(x1, y1, x2, y2):
    #angle between two vectors
    #solution for 3563, 3564
    return math.degrees(abs(math.atan(y1/x1)-math.atan(y2/x2)))

print(vectAngle(1, 5, 10, -2))
print(vectAngle(3, 4, -4, 7/2))
print(vectAngle(2, -5, 15, 13/2))
print(vectAngle(2, 3/2, 15/2, -10))

print(addVect(2, 3, -1, 4, 16, -3))
a = [1, -3]
b = [-2, 5]
i = [1, 0]
j = [0, 1]
print("3556")
print(addVect(*a, *b))
print(vectMul(*a, 2))
print(addVect(*vectMul(*a, 2), *vectNeg(*vectMul(*b, 3))))